import { HeaderStyle, Container} from "./style"
import logo from "../../assets/logo.svg"

const Header = ({ showProducts }) => (
    <HeaderStyle>
      <Container>
        <img src={logo} alt="" />

        <div>
          <input onChange={(e) => {
            const search = e.target.value.trim();
            showProducts(search);
          }} type="text" placeholder="Digitar Pesquisa" />
          <button>Pesquisar</button>
        </div>
      </Container>
    </HeaderStyle>
)

export default Header