import { ApiClient } from 'admin-bro'
import { Text, Box, Header, Label, Input, Button, Modal, DatePicker } from '@admin-bro/design-system'
import { useState } from 'react'
import Select from 'react-select'
import { useForm } from 'react-hook-form'

const api = new ApiClient()

const Generate_Questionnaires = () => {

  const subjectOptions = [
    { value: 'Mathematics', },
    { value: 'Science', },
    { value: 'English', },
    { value: 'Filipino', },
    { value: 'Abstract', }
  ]

  const algorithmOptions = [
    { value: 'ACO' },
    { value: 'ABC' },
  ]

  const [subject, setSubject] = useState(subjectOptions[0])
  const [algorithm, setAlgorithm] = useState(algorithmOptions[0])
  const [easy, setEasy] = useState('')
  const [medium, setMedium] = useState('')
  const [hard, setHard] = useState('')
  const [time, setTime] = useState('')
  const [quantity, setQuantity] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [isVisible, setIsVisible] = useState(false)
  const [errorIsVisible, setErrorIsVisible] = useState(false)
  const [lastErrorIsVisible, setLastErrorIsVisible] = useState(false)

  const { handleSubmit, register, formState: { errors } } = useForm()

  const modalProps = {
    title: 'Successfully generated new questionnaire',
    label: 'Success',
    variant: 'success',
    onOverlayClick: () => setIsVisible(false),
    onClose: () => setIsVisible(false),
  }

  const errorModalProps = {
    title: 'Percentage sum must be equal to 100',
    label: 'Error',
    variant: 'danger',
    onOverlayClick: () => setErrorIsVisible(false),
    onClose: () => setErrorIsVisible(false),
  }

  const lastErrorModalProps = {
    title: 'No questions found for given time constraint',
    label: 'Error',
    variant: 'danger',
    onOverlayClick: () => setLastErrorIsVisible(false),
    onClose: () => setLastErrorIsVisible(false),
  }

  const onSubmit = async (data) => {
    //e.preventDefault()
    const start_date = new Date(startDate).toISOString()

    if (parseInt(data.easy) + parseInt(data.medium) + parseInt(data.hard) != 100) {
      console.log(easy, medium, hard)
      setErrorIsVisible(true)
      return
    }

    try {
      const formedData = {
        subject: subject.value,
        algorithm: algorithm.value,
        easy_percent: data.easy, 
        medium_percent: data.medium,
        hard_percent: data.hard,
        minutes_allotted: data.time,
        questionnaire_quantity: data.quantity,
        start_date: start_date,
      }
    
      const url = 'http://localhost:3001/api/admin/generate_questionnaire'
      const res = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formedData)
      })

      if (res.status == 200) {
        setSubject(subjectOptions[0])
        setAlgorithm(algorithmOptions[0])
        setStartDate(new Date())
        setIsVisible(true)
      } else {
        setLastErrorIsVisible(true)
      }

      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Box variant="grey">
      {lastErrorIsVisible && <Modal {...lastErrorModalProps} />}
      {errorIsVisible && <Modal {...errorModalProps} />}
      {isVisible && <Modal {...modalProps} />}
      <Header.H2>Generate Questionnaires</Header.H2>
      <Box flex flexDirection="column" variant="white">
        <form onSubmit={handleSubmit(onSubmit)}>

          <Box my='xl'>
            <Label size='lg' htmlFor='input1'>Subject:</Label>
            <Select 
              value={subject}
              onChange={(item) => setSubject(item)}
              options={subjectOptions} 
              getOptionValue={(subjectOption) => subjectOption.value}
              getOptionLabel={(subjectOption) => subjectOption.value}
            />
          </Box>

          <Box my='xl'>
            <Label size='lg' htmlFor='input1'>Algorithm Used:</Label>
            <Select 
              value={algorithm}
              onChange={(item) => setAlgorithm(item)}
              options={algorithmOptions} 
              getOptionValue={(algorithmOption) => algorithmOption.value}
              getOptionLabel={(algorithmOption) => algorithmOption.value}
            />
          </Box>

          <Box my='xl'>
            <Label size='lg' htmlFor='input1'>Percentage of Easy Questions (0-100):</Label>
            <input
              style={{ width: '100%', "box-sizing": 'border-box', padding: '5px' }}
              {...register('easy', {
                required: true,
                min: 0,
                max: 100
              })}
            />
            { errors.easy && <Text color='error'>This is required and must follow range.</Text> }
          </Box>

          <Box my='xl'>
            <Label size='lg' htmlFor='input1'>Percentage of Medium Questions (0-100):</Label>
            <input
              style={{ width: '100%', "box-sizing": 'border-box', padding: '5px' }}
              {...register('medium', {
                required: true,
                min: 0,
                max: 100
              })}
            />
            { errors.medium && <Text color='error'>This is required and must follow range.</Text> }
          </Box>

          <Box my='xl'>
            <Label size='lg' htmlFor='input1'>Percentage of Hard Questions (0-100):</Label>
            <input
              style={{ width: '100%', "box-sizing": 'border-box', padding: '5px' }}
              {...register('hard', {
                required: true,
                min: 0,
                max: 100
              })}
            />
            { errors.hard && <Text color='error'>This is required and must follow range.</Text> }
          </Box>

          <Box my='xl'>
            <Label size='lg' htmlFor='input1'>Total Time Allotted in Minutes:</Label>
            <input
              style={{ width: '100%', "box-sizing": 'border-box', padding: '5px' }}
              {...register('time', {
                required: true,
              })}
            />
            { errors.time && <Text color='error'>This is required.</Text> }
          </Box>

          <Box my='xl'>
            <Label size='lg' htmlFor='input1'>Questionnaire Quantity:</Label>
            <input
              style={{ width: '100%', "box-sizing": 'border-box', padding: '5px' }}
              {...register('quantity', {
                required: true,
              })}
            />
            { errors.quantity && <Text color='error'>This is required.</Text> }
          </Box>

          <Box my='xl'>
            <Label size='lg' htmlFor='input1'>Starting Date Constraint:</Label>
            <Box width={1}>
              <DatePicker value={startDate} onChange={(date) => setStartDate(date)}/>
            </Box>
          </Box>

          <Box my='xl'>
            <Button type='submit'>Generate</Button>
          </Box>
        </form>

      </Box>
    </Box>
  )
}

export default Generate_Questionnaires

