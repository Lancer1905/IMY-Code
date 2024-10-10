// Pieter Venter u23896257
// Event Component
class Event extends React.Component {
  render() {
    return (
      <>
        <h2><strong>{this.props.name}</strong></h2>
        <p>{this.props.date}</p>
        <p>{this.props.description}</p>      
      </>
    );
  }
}

// EventFeed Component
class EventFeed extends React.Component {
  
  render(){
    return (
      <div className="container">
        {this.props.events.map((event,key) => {
          return (<Event key={key} name={event.name} date={event.date} description={event.description}/>);
        })}
      </div>
    );
  }
}
// Search Component
class Search extends React.Component{
  
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
    this.searchQuery = React.createRef();
    this.state = {
      searchResults: [],
      searchClicked: false
    };
  }

  search(e){
    e.preventDefault();

    const searchResults = this.props.events.filter(event => {
      let searchVal = this.searchQuery.current.value.trim().toLowerCase();
      if (searchVal[0] == '#' && searchVal !== ''){
        return event.description.toLowerCase().includes(searchVal);
      } else 
        return event.name.toLowerCase().includes(searchVal) && searchVal !== ''; 
    });
    
    if (searchResults.length > 0){
      this.setState({
        searchResults: searchResults,
        searchClicked: true
      });
      this.props.onSearchResults(searchResults);
    } else if (this.searchQuery.current.value.length > 0){
      let mockArray = [{name: 'some mock value to allow the search to show nothing'}];
      this.setState({
        searchResults: [],
        searchClicked: true
      });
      this.props.onSearchResults(mockArray);
    } 
      else
    {
      this.setState({
        searchResults: [],
        searchClicked: false
      });
      this.props.onSearchResults([]);
    }
  }

  render(){
    const { searchResults, searchClicked } = this.state;

    return(
    <>
      <form onSubmit={this.search} style={{ display: 'inline' }}>
        <label>Search </label>
        <input placeholder="Search something..." type='text' ref={this.searchQuery}/>
        <input type="submit" value="Search" />
      </form>
      <h2>Feed</h2>

        {searchClicked && searchResults.length > 0 ? (
        <>
          {this.state.searchResults.map(result => {
            return (
              <div key={result.name}>
                <h1>{result.name}</h1>
                <p>{result.date}</p>
                <p>{result.description}</p>
            </div>
            );
          })}
        </>
        ) : searchClicked ? (<p>No event found.</p>):(<p></p>)
      }
    </>
    );
  }
}

// App Component
class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {events :[
      {
        name: "A Walk in the Park",
        date: "2021-09-19",
        description: "Let's go walking and feed the ducks. #ducks #walk #park #Sunday",
      },
      {
        name: "Beach Day!",
        date: "2019-12-28",
        description: "Let's have a fun day on the beach right before #xmas !! #beachday #summertime"
      },
      {
        name: "Pokemon Go Meetup",
        date: "2016-06-11",
        description: "I wanna meet up with #PokemonGo fans to #catchEmAll #pokemon #meetup"
      },
      {
        name: "Crochet Date!",
        date: "2024-07-09",
        description: "Let's meetup to go crochet in the park. I'll bring the wool!! #park #crochet #meetup"
      },
      {
        name: "Yoga in the Morning",
        date: "2022-07-15",
        description: "Join us for a refreshing morning #yoga session #wellness #morning"
      },
      {
        name: "Hackathon",
        date: "2023-03-10",
        description: "Compete in this year's #hackathon to win amazing prizes and meet feelow #coders #coding"
      },
      {
        name: "Summer Braai",
        date: "2021-08-05",
        description: "Come and enjoy a delicious braai with friends and family #braai #summertime #summer #fun"
      },
      {
        name: "Art Exhibition",
        date: "2018-05-20",
        description: "Explore modern art at the Joburg #art #exhibition from talented artists around the world #creativity"
      },
      {
        name: "Star Wars Under the Stars",
        date: "2023-05-04",
        description: "Watch your favorite #StarWars movies under the open sky! #movienight #outdoor #maythe4thbewithyou"
      },
      {
        name: "Live Concert: Rock the Night",
        date: "2023-06-25",
        description: "Enjoy an electrifying night of live music from your favourite #rock artists #concert #rockmusic #livemusic"
      },
      {
        name: "Farmers Market",
        date: "2024-04-01",
        description: "Fresh produce, homemade goods, and more at the local farmers market this week #farmersmarket #organic"
      },
      {
        name: "Comicon Anyone?",
        date: "2024-09-26",
        description: "Who's going to #comicon this year? Let's #meetup - I'll be Spiderman!"
      }
    ],
      searchResults: []
    };

    this.state.events.sort((a, b) => new Date(b.date) - new Date(a.date));
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(searchResults){
    this.setState({searchResults});
  }

  render(){
    return (
      <>
        <h1>Events!</h1>
        <Search onSearchResults={this.handleSearch} events={this.state.events}></Search>
        {!this.state.searchResults.length > 0 && <EventFeed events={this.state.events}/>}
      </>
    );
  }
}
// render here
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);
// complete this code