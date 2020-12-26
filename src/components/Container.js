import styled from 'styled-components'

const Container = styled.div`
    max-width: 100%;
    margin: auto;

    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) { max-width: 540px }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) { max-width: 720px }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) { max-width: 960px }

    // X-Large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) { max-width: 1140px }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) { max-width: 1320px }

    // XXX-Large devices (1600px and up)
    @media (min-width: 1600px) { max-width: 1440px }
`

export default Container