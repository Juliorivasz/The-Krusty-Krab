

// eslint-disable-next-line react/prop-types
export const Logo = ({urlImage = "/TKK.svg", w="100", h="100", display=""}) => {
  return (
    <div className="logo" style={{width: `${w}px`, height: `${h}px`, display:display}}>
        <img src={urlImage} alt="the krusty brab" />
    </div>
  )
}