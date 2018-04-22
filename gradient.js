class Gradient extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            divStyle: {
            },
            firstColor: "#aabbcc",
            secondColor: "#123456",
            direction: "to top"
        };

        this.onFirstColorChange = this.onFirstColorChange.bind(this);
        this.onSecondColorChange = this.onSecondColorChange.bind(this);
        this.onDirectionChange = this.onDirectionChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onFirstColorChange(e) {
        this.setState({firstColor: e.target.value});
    }

    onSecondColorChange(e) {
        this.setState({secondColor: e.target.value});
    }

    onDirectionChange(e) {
        this.setState({direction: e.target.value});
    }

    onSubmit() {
        event.preventDefault();
        this.setState({divStyle: {
                backgroundImage: "linear-gradient("+ this.state.direction + "," + this.state.firstColor + ", " + this.state.secondColor + ")"
            }});
    }

    render() {
        return (
            <div style={this.state.divStyle}>
                <form action="" method="get" onSubmit={this.onSubmit}>
                    <input type="text" name="firstColor" id="textColorSelectorOne" pattern="^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$" value={this.state.firstColor} onChange={this.onFirstColorChange}/>
                    <input type="text" name="secondColor" id="textColorSelectorTwo" pattern="^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$" value={this.state.secondColor} onChange={this.onSecondColorChange}/>
                    <select id="directionSelector" value={this.state.direction} onChange={this.onDirectionChange}>
                        <option value="to top">To top</option>
                        <option value="to bottom">To bottom</option>
                        <option value="to left">To left</option>
                        <option value="to right">To right</option>
                    </select>
                    <input type="submit" id="submitButton" value="go"/>
                    <input type="color" id="pickColorSelectorOne" name="firstColor" value={this.state.firstColor} onChange={this.onFirstColorChange}/>
                    <input type="color" id="pickColorSelectorTwo" name="secondColor" value={this.state.secondColor} onChange={this.onSecondColorChange}/>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<Gradient/>, document.getElementById("root"));