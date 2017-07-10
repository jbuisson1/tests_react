import * as React from "react";


export class Hello extends React.Component<any, any> {

    constructor(props: any){
        super(props);

        //Create new state to store wether the button was pressed or not
        this.state = {clicked: false};
    }


    //Button onClick event handler
    change_color()
    {
        //Change the state where clicked is inversed to switch colors
        this.setState({clicked: !this.state.clicked});
    }


    //Rendering
    render() {
        var color: string;
        //Checks the value of state.clicked to change the button's color (TODO: replace with ternary expression)
        if (this.state.clicked)
        {
            color = "#ff4848";
        }
        else
        {
            color = "#ffb516";
        }
        //Sets the style for the button
        const buttonStyle = {
            color: 'white',
            backgroundColor: color,
            marginTop: '25%',
            
        };
        //Returns the button with its style, onClick event, label and title
        return (<button style={buttonStyle} label="Pushtalents" title="Pushtalents" onClick={this.change_color.bind(this)}>Pushtalents</button>);
    }
}