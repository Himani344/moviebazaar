import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

 function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ textAlign:'center',height:'40px', border:'2px' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='#'>
          MovieBazzar.com
        </a>
      </div>
    </MDBFooter>
  );
}
export default Footer;