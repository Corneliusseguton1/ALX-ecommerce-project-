import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: #FFA900;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
`;

const Announcement = () => {
    return (
        <Container>
            Super Deal! Free shipping on Orders Over Ksh5000
        </Container>
    )
}

export default Announcement
