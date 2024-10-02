

// eslint-disable-next-line react/prop-types
export const Logo = ({urlImage = "/TKK.svg", w="100", h="100"}) => {
  return (
    <div style={{width: `${w}px`, height: `${h}px`}}>
        <img src={urlImage} alt="the krusty brab" />
    </div>
  )
}