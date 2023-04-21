import logo from '../assets/logo.png';

const Icon = () => {
  return (
    <div
        style={{
            display: 'flex',
        }}
        className='icon'
    >
        <img
            onClick={() => {window.location.href = "https://playlistpilot.de"}}
            src={logo}
            alt="logo"
            style={{ width: '100px', height: '100px' }}
        />
        <h1>playlistPilot</h1>
    </div>
)
}

export default Icon