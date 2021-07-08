import { Text, Box, Header, Label, Input, Button, Modal, DatePicker } from '@admin-bro/design-system'

const InPerson_Exam = () => {

  const clickHandler = async (e, subjectName) => {
    try {
      const formedData = {
        subject: subjectName
      }

      const url = 'http://localhost:3001/api/admin/generate_pdf'
      const res = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formedData)
      })

      if (res.status === 200) {
        const blob = await res.blob();
        const file = new Blob(
          [blob], 
          {type: 'application/pdf'}
        );
        //Build a URL from the file
        const fileURL = URL.createObjectURL(file);
        //Open the URL on new Window
        window.open(fileURL);
      }

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Box variant='grey'>
      <Header.H2>In-Person Exam</Header.H2>
      <Box flex flexDirection="column" variant="white">

        <Box my='xl'>
          <Button width={1} onClick={(e) => clickHandler(e, 'Mathematics')}>Mathematics Exam</Button>
        </Box>

        <Box my='xl'>
          <Button width={1} onClick={(e) => clickHandler(e, 'Science')}>Science Exam</Button>
        </Box>

        <Box my='xl'>
          <Button onClick={(e) => clickHandler(e, 'English')}>English Exam</Button>
        </Box>

        <Box my='xl'>
          <Button onClick={(e) => clickHandler(e, 'Filipino')}>Filipino Exam</Button>
        </Box>

        <Box my='xl'>
          <Button onClick={(e) => clickHandler(e, 'Abstract')}>Abstract Exam</Button>
        </Box>

      </Box>
    </Box>
  )

}

export default InPerson_Exam
