import { Component }from 'react';

import Header from '../Header/Header';
import Container from '../Container/Container';
import Footer from '../Footer/Footer';

class App extends Component {

    render() {   

        return (
<>
            <Header />
            <Container>                
                {this.props.children}
            </Container>
            <Footer />
            </>
        );
    }
}

export default App;