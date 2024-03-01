import { Button, Container } from "@mui/material";
import NavBarButton from "./NavBarButton";

export default function NavBar() {
    return (
        <>
            <Container sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "lightgrey",
                height: "75px",
            }}>
                <Container>
                    <div>Logo</div>
                </Container>
                <Container sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}>
                    <NavBarButton to={"/"} text={"Home"} />
                    <NavBarButton to={"/services"} text={"Services"} />
                    <NavBarButton to={"/about"} text={"About"} />
                    <NavBarButton to={"/contact"} text={"Contact"} />
                    <Button>FR/EN</Button>
                </Container>
            </Container>
        </>
    )
}