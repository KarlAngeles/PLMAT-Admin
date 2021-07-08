import { Text, Box, Header, Label, Input, Button, Modal, DatePicker } from '@admin-bro/design-system'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

const Check_Passers = () => {

  const [isVisible, setIsVisible] = useState(false)
  const { handleSubmit, register, formState: { errors } } = useForm()

  const modalProps = {
    title: 'Checking is now in progress',
    label: 'Success',
    variant: 'success',
    onOverlayClick: () => setIsVisible(false),
    onClose: () => setIsVisible(false),
  }

  const onSubmit = async (data) => {
    try {
      console.log(data)
      const formedData = {
        passing: data.passing
      }

      const url = 'http://localhost:3001/api/admin/checking'
      const res = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formedData)
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Box variant='grey'>
      {isVisible && <Modal {...modalProps} />}
      <Header.H2>Check Passers</Header.H2>
      <Box flex flexDirection="column" variant="white">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box my='xl'>
            <Label size='lg' htmlFor='input1'>Percentage to Pass (1-100):</Label>
            <input
              style={{ width: '100%', "box-sizing": 'border-box', padding: '5px' }}
              {...register('passing', {
                required: true,
                min: 1,
                max: 100
              })}
            />
            { errors.passing && <Text color='error'>This is required and must follow range.</Text> }
          </Box>
          <Box my='xl'>
            <Button type='submit'>Check For Passers</Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default Check_Passers
