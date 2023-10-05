ReactDOM.render(
  <React.Fragment>
    <Header />
    <Content />
  </React.Fragment>,
  document.getElementById("root")
);

function Header() {
  return (
    <header>
      <div class="container">
        <div class="flex">
          <i class="fa-solid fa-earth-americas"></i>
          <h1>my travel journal</h1>
        </div>
      </div>
    </header>
  );
}

function Content() {
  return (
    <main>
      <div className="container">
        <Destination
          img="fuji.jpeg"
          country="Japan"
          destination="Mount Fuji"
          dateRange="12 Jan, 2021 - 24 Jan, 2021"
          desc="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        />
        <Destination
          img="operahouse.jpeg"
          country="Australia"
          destination="Sydney Opera House"
          dateRange="27 May, 2021 - 8 Jun, 2021"
          desc="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings"
        />
        <Destination
          img="Geirangerfjord.jpeg"
          country="Norway"
          destination="Geirangerfjord"
          dateRange="01 Oct, 2021 - 18 Nov, 2021"
          desc="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
        />
      </div>
    </main>
  );
}

function Destination(props) {
  return (
    <div className="destination-block">
      <div>
        <img src={props.img} />
      </div>
      <div>
        <i class="fa-solid fa-location-dot"></i>
        &nbsp;
        <small>
          <b>{props.country}</b>
        </small>
        <h2>{props.destination}</h2>
        <h4>{props.dateRange}</h4>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}
