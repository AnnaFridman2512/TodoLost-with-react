function Title(props){
    const {name, size} = props;

    switch (size) {
        case "1":
          return <h1>Welcome {name}!</h1>;
        case "2":
          return <h2>Welcome {name}!</h2>;
        case "3":
          return <h3>Welcome {name}!</h3>;
        case "4":
          return <h4>Welcome {name}!</h4>;
        case "5":
          return <h5>Welcome {name}!</h5>;
        case "6":
          return <h6>Welcome {name}!</h6>;
        default:
          return "Invalid size!";
      }
    }
    
    export default Title; 

