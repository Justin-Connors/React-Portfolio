import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div>
      <MDBFooter className='bg-dark text-center text-white fixed-bottom'>
        <MDBContainer className='p-2 pb-0'>
          <section className='mb-2'>
            <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/justin-connors-0a3b42127/' role='button' target="_blank">
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='https://github.com/Justin-Connors' role='button' target="_blank">
              <MDBIcon fab icon='github' />
            </MDBBtn>
          </section>
        </MDBContainer>
        <div className='text-center p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2023 Copyright: &nbsp;
          <a className='text-white' href='https://github.com/Justin-Connors/React-Portfolio' target="_blank">
            Justin Connors
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}

export default Footer;