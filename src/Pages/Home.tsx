import { Container } from "@mui/material";
import Photo from "../Assets/book.jpg"

const paragraphe = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Viverra nibh cras pulvinar mattis nunc. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. Quis risus sed vulputate odio ut enim blandit volutpat. Enim nunc faucibus a pellentesque sit amet. Faucibus vitae aliquet nec ullamcorper sit. Volutpat lacus laoreet non curabitur gravida arcu. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Pellentesque massa placerat duis ultricies lacus. Ultricies tristique nulla aliquet enim tortor at auctor urna nunc. Ante metus dictum at tempor. Orci dapibus ultrices in iaculis nunc sed. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Senectus et netus et malesuada fames ac turpis egestas. Semper viverra nam libero justo laoreet sit amet cursus sit."


export default function Home() {

    return (
        <>
            <Container
                sx={{
                    fontSize: 42,
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "50px",
                }}>
                Welcome chez Germain !
            </Container>
            <Container sx={{
                display: "flex",
                flexDirection: "row",

                justifyContent: "space-between",
                marginTop: "50px",
            }}>
                <img style={{
                    height: "50%",
                    width: "50%",
                }} src={Photo} alt="random" />
                <Container>
                    <h1>Titre</h1>
                    <h5>Sous-titre</h5>
                    {paragraphe}
                </Container>
            </Container>
        </>
    )
}