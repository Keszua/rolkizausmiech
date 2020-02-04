import React from 'react';
import Iframe from 'react-iframe'
//import Alert from 'react-bootstrap/Alert'
//import Container from 'react-bootstrap/Alert'
   
import 'bootstrap/dist/css/bootstrap.css';
import { Alert, Container, Badge } from 'react-bootstrap';


const MapPage = () => {
    return ( 
        <>
            <Container fluid>
                <br/>
                <Alert variant="success">
                    <Alert.Heading><h1>Zaplanuj swoją rolkowa wycieczkę.</h1></Alert.Heading>
                    Zastanawiasz się gdzie można pojeździć na rolkach?
                    <hr />
                    <p>
                        Zjeździłem cały Radom, przy okazji nanosząc na mapę jakoś powierzchni, jaką miałem pod kółeczkami.
                        <br/>Skorzystaj z mapy, jaką dla Ciebie przygotowałem.    
                    </p>
                </Alert>

            <Iframe url="https://www.google.com/maps/d/embed?mid=11wRktITey292ZcSmWtZh8GGdCuQ" 
                width="100%" height="480" 
                />
                </Container>

            <Container fluid>
                <br/>
                <Alert variant="light">
                    <Alert.Heading>Korzystaj z warstwa:</Alert.Heading>
                    <hr />
                    <Badge variant="dark">"Jazda po radomiu"</Badge> Jak przejechać przez miasto, aby nie korzystać
                     z dróg dla samochodów. Kolory oddają stan chodników.
                    <hr />
                    <Badge variant="dark">"Nie ograniczaj się, wyjedź dalej!"</Badge> Wyjedz po za Radom. 
                    Wybierane trasy o mniejszym natężeniu ruchu. Kolory oddają stan asfaltu na jezdni.
                </Alert>

                <Alert variant="success">
                    <Alert.Heading>ZIELONY</Alert.Heading>
                        Jazda to przyjemność. Relaksuj się na gładkich chodnikach, asfalcie, gładkiej kostce bez frezów.
                </Alert>

                <Alert variant="primary">
                    <Alert.Heading>NIEBIESKI</Alert.Heading>
                    Chcesz poczuć mrówki na stopach? Sprzęt wytrzyma wstrzasy? Korzystaj z kostki z frezem oraz chodników w nieco gorszym stanie. 
                </Alert>

                <Alert variant="warning">
                    <Alert.Heading>POMARAŃCZOWY</Alert.Heading>
                    "Ja nie przejadę?" Nie polecane do jazdy, słaby, dziurawy chodnik.
                </Alert>

                <Alert variant="danger">
                    <Alert.Heading>CZERWONY</Alert.Heading>
                    NIE przejezdny, Zwykle brak utwardzenia lub szalenie zniszczony chodnik/ulica.
                </Alert>

                <Alert variant="info">
                    <Alert.Heading>FIOLETOWY</Alert.Heading>
                    Ciężkie odcinki, strome, szybkie. Tylko dla tych, którzy lubią się czasami poździerać.
                </Alert>

                <Alert variant="dark">
                    <Alert.Heading>CZARNY/BRĄZOWY</Alert.Heading>
                    Mało uczęszczane drogi wewnętrzne, ślepe uliczki.
                </Alert>


                <Alert variant="light">
                    <Alert.Heading>Masz uwagi, spostrzeżenia?</Alert.Heading>
                    Może coś jest nie aktualne?  
                    <Alert.Link href="/contact"> Poinformuj mnie o tym.</Alert.Link>.
                </Alert>

            </Container>

            {/* <br/>ZIELONY - Jazda to przyjemność. Relaksuj się na gładkich chodnikach, asfalcie, gładkiej kostce bez frezów.
            <br/>NIEBIESKI - Chcesz poczuć mrówki na stopach? Sprzęt wytrzyma wstrząsy? Korzystaj z kostki z frezem oraz chodników w nieco gorszym stanie. 
            <br/>POMARAŃCZOWY - "Ja nie przejadę?" Nie polecane do jazdy, słaby, dziurawy chodnik.
            <br/>CZERWONY - NIE przejezdny, Zwykle brak utwardzenia lub szalenie zniszczony chodnik/ulica.
            <br/>FIOLETOWY - Ciężkie odcinki, strome, szybkie. Tylko dla tych, którzy lubią się czasami poździerać.
            <br/>CZARNY/BRĄZOWY - Mało uczęszczane drogi wewnętrzne, ślepe uliczki.
            <br/>
            W trybie pełnoekranowym, zostaniesz przełączony na nowa stronę do swojej domyślnej przeglądarki.
            uzyskasz dostęp do legendy, gdzie otrzymasz dostęp do wyboru warstwy i wszystkich wprowadzonych tras.
            <br/>
            <br/> */}

           
        </>
     );
}
 
export default MapPage;