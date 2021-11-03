import { Component, createElement } from "react";
import { View } from "react-native";
import { withNavigation } from "react-navigation";

class NavExposer2 extends Component {
    render() {
        global.navigation = this.props.navigation;
        return <View style={this.props.style} />;
    }
}

export const NavExposer = withNavigation(NavExposer2);
