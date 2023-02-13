

return(
  <Tilt
    perspective={200}
    glareEnable={true}
    glareMaxOpacity={1}
    glarePosition='all'
    glareBorderRadius='20px'
    transitionSpeed='800' 
    scale={1.24}
    reset='true'
    className= 'fw8 bg-light-gray ba bw2 b--moon-gray'
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0px 0px 0px 0px',
      margin: '10px 3px 10px 3px',
      width: 'auto',
      minWidth: '46px',
      borderRadius: '24px',
    }}
  >
    <button
      onClick={changePage}
      name={nextPokedexPosition}
      className= 'fw8 bw0'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px 6px 10px 6px',
        margin: '0px 0px 0px 0px',
        width: 'auto',
        minWidth: '38px',
        borderRadius: '24px',
        position: 'absolute',
        zIndex: 998,
        [position]: 6,
      }}
    >
      {btnText}
    </button>
  </Tilt>
);