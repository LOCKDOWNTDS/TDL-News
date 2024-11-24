import { MDBFooter } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-light text-lg-left'>
      <div className='text-center p-3'
       style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-light' href="TDR News">
        THUNDER NEWS
        </a>
      </div>
    </MDBFooter>
  );
}

export default  Footer;