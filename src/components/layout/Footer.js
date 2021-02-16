const Footer = ({ loading, toggleLoading }) => (
  <footer>
    <p
      className='link tooltip top'
      tooltip-content={`Set loading to ${!loading}`}
      onClick={toggleLoading}>
      Toggle Loading
    </p>
    <h6>© Max Monis {new Date().getFullYear()}</h6>
  </footer>
);

export default Footer;
