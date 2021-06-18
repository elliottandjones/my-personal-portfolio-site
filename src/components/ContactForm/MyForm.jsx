import React from 'react'
import { splitFormProps, useField, useForm } from 'react-form'
import './styles.css'

const InputField = React.forwardRef((props, ref) => {
  // Let's use splitFormProps to get form-specific props
  const [field, fieldOptions, rest] = splitFormProps(props)

  // Use the useField hook with a field and field options
  // to access field state
  const {
    meta: { error, isTouched, isValidating, message },
    getInputProps,
  } = useField(field, fieldOptions)

  // Build the field
  return (
    <>
      <input {...getInputProps({ ref, ...rest })} />

      {/*
        Let's inline some validation and error information
        for our field
      */}

      {isValidating ? (
        <em>Validating...</em>
      ) : isTouched && error ? (
        <strong>{error}</strong>
      ) : message ? (
        <small>{message}</small>
      ) : null}
    </>
  )
})

function MyForm() {
  const defaultValues = React.useMemo(
    () => ({
      name: 'tanner',
      age: '29',
      email: 'tanner@gmail.com',
      friends: ['jaylen'],
    }),
    []
  )
  const {
    Form,
    values,
    pushFieldValue,
    removeFieldValue,
    meta: { isSubmitting, isSubmitted, canSubmit, error },
  } = useForm({
    defaultValues,
    validate: (values) => {
      if (values.name === 'tanner' && values.age !== '29') {
        return "This is not tanner's correct age"
      }
      return false
    },
    onSubmit: async (values, instance) => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log(values)
    },
    debugForm: true,
  })

  return (
    <Form>
      <div>
        <label>
          Name: <InputField field="name" validate={(value) => (!value ? 'Required' : false)} />
        </label>
      </div>
      <div>
        <label>
          Email:{' '}
          <InputField
            field="email"
            validate={async (value) => {
              if (!value) {
                return 'Email is required'
              }

              if (!validateEmail(value)) {
                return 'Please enter a valid email addresss'
              }

              console.log(`Checking email: ${value}...`)

              // We're going to mock that for now
              await new Promise((resolve) => setTimeout(resolve, 2000))

              return value === 'tanner@gmail.com' ? 'Email is already being used' : false
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Username:{' '}
          <InputField
            field="username"
            validate={(value, { debounce, setMeta }) => {
              console.log('checkusername')
              if (!value) {
                return 'Username is required'
              }

              return debounce(async () => {
                console.log('Checking username...')
                await new Promise((resolve) => setTimeout(resolve, 2000))
                if (value === 'tanner') {
                  setMeta({ error: 'Username is unavailable', message: null })
                  return
                }

                setMeta({ error: null, message: 'Username is available!' })
              }, 2000)
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Notes: <InputField field="other.notes" defaultValue="This is a note." />
        </label>
      </div>
      <div>
        Friends
        <div
          style={{
            border: '1px solid black',
            padding: '1rem',
          }}
        >
          {values.friends.map((friend, i) => (
            <div key={i}>
              <label>
                Friend: <InputField field={`friends.${i}`} />{' '}
                <button type="button" onClick={() => removeFieldValue('friends', i)}>
                  X
                </button>
              </label>
            </div>
          ))}
          <button type="button" onClick={() => pushFieldValue('friends', '')}>
            Add Friend
          </button>
        </div>
      </div>

      {isSubmitted ? <em>Thanks for submitting!</em> : null}

      {error ? <strong>{error}</strong> : null}

      {isSubmitting ? (
        'Submitting...'
      ) : (
        <div>
          <button type="submit" disable={!canSubmit}>
            Submit
          </button>
        </div>
      )}
    </Form>
  )
}

function validateEmail(email) {
  var reggie =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reggie.test(String(email).toLowerCase())
}

export default MyForm