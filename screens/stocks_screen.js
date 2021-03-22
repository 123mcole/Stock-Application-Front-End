import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
import {StyleSheet, View, Text, TouchableHighlight, ScrollView, SafeAreaView, ActivityIndicator} from 'react-native';
import GLOBAL from '../global/global.js';

let style = StyleSheet.create({
    headerText: {
        alignItems: 'center',
        fontSize: 40,
        color: 'white'
    },
    header: {
        height: '10%',
        backgroundColor: '#33B8FF',
        alignItems: 'center', 
        justifyContent: 'center',
    },
    body: {
        height: "88%",
    },
    scroll_view: {

    },
    stock_component: {
        backgroundColor: "#B4E5FF",
        flexDirection: 'row',
        height: 40,
        marginHorizontal: '5%',
        alignItems: 'center',
        marginTop: 10,
    },
    ticker_box: {
        width: "25%", 
        flexDirection: 'row-reverse',
        position: 'absolute',
        right: 10,
        backgroundColor: 'red'
    },
})

/*
stock_component: {
        height: 50,
        marginTop: 10,
        marginHorizontal: 10,
        backgroundColor: "#B4E5FF",
        justifyContent: 'center',
        flexDirection: 'row',
    },
    ticker_box: {
        alignSelf: 'flex-end',
        marginVertical: '50%',
        marginLeft: '10%',
        width: '20%',
    },
*/

export class StockScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stockComponents: [],
            isLoading: true,
            number: 0
        };
    }

    async componentDidMount() {
        try{
            let response = await fetch("http://192.168.0.86:8000/stock/");
            let json = await response.json();
            this.createStockComponents(json);
        } catch(error) {
            console.error(error);
        }
    }

    createStockComponents(json) {
        for (var i = 0; i < json.length; i++) {
            var stock = json[i];

            this.setState(prevState => ({stockComponents: [...prevState.stockComponents, 
            <StockComponent 
                company_name = {stock.company_name} ticker_symbol = {stock.ticker_symbol} current_price = {stock.current_stock_price} open_price = {stock.open_price}/>]}))
        }
    }

    render() {
        const stocks = this.state.stockComponents

        return (
        <>
            <View style={style.header}>   
                <TouchableHighlight onPress={() => this.setState(prevState => ({stockComponents: [...prevState.stockComponents, <StockComponent/>]}))}>     
                    <Text style={style.headerText}>
                        Stocks
                    </Text>
                </TouchableHighlight> 
            </View>
            <View style={style.body}>
                {this.state.isLoading ? (
                <SafeAreaView>   
                    <ScrollView>
                        {stocks.map((component) => (component))}
                    </ScrollView>
                </SafeAreaView>) 
                :
                (<Text>
                    Loading...
                </Text>)}
            </View>
        </>
        );
    }
}

class StockComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            image: null,
            price: 0.0,
            day_change: 0.0,
        };
    }

    render() {
        const current_price = parseInt(this.props.current_price);
        const open_price = parseInt(this.props.open_price);
        const ratio = (current_price - open_price) / open_price;

        return (
            <View style={style.stock_component}>
                <Text style={{fontSize: 20, left: 10}}>
                        {this.props.company_name}
                    </Text>
                <View style={[style.ticker_box, ((ratio < 0 ? {backgroundColor: 'red'} : {backgroundColor: 'green'}))]}>
                    <Text style={{fontSize: 16}}>
                        {ratio.toFixed(2)} %
                    </Text>
                </View>
            </View>
            );
    }
}

