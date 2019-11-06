/**
 * Home Page
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Alert,
    View,
    Image,
    Text,
    Picker,
    Button,
    TouchableOpacity,
    TextInput,
    StatusBar,
} from 'react-native';

import styles from './index.style'
import Footer from '../header/bottomBar'
import Header from '../header/topBar'
import Svg, {Path, Defs, Filter, feGaussianBlur, feBlend, feOffset} from 'react-native-svg'

export class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fillOpacity1: 1, 
            fillOpacity2: 1, 
            fillOpacity3: 1, 
            fillOpacity4: 1, 
            fillOpacity5: 1, 
            fillOpacity6: 1, 
            fillOpacity7: 1,
            colorDiagonal: "#8fd2c7",
            // colorDiagonal: "#828A8F",
            colorVertical: "#b5d334",
            // colorVertical: "#9E1B32",
            colorGray: "#989898",
            colorBtn: "#000000",
            // // colorTxt: "#393839",
            // colorTxt: "#000000",
            // colorTxtV: "#ffffff",
            colorTxtV: "#393839",
        };
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <Header navigation={this.props.navigation}/>
                {/* <View stlye={styles.topBar}>
                </View> */}
                 {/* <View style={styles.topBar}>
                    <TouchableOpacity style={styles.pbContainer} onPress={() => this.props.navigation.navigate('Profile')}>
                        <Svg width='100%' height= '100%' viewBox="0 0 45.53 45.53"> 
                            <Path d="M22.77,0A22.77,22.77,0,1,0,45.53,22.76,22.76,22.76,0,0,0,22.77,0Zm0,6.81a7.53,7.53,0,1,1-7.53,7.53A7.53,7.53,0,0,1,22.77,6.81Zm0,32.77a16.71,16.71,0,0,1-10.88-4,3.24,3.24,0,0,1-1.13-2.44,7.61,7.61,0,0,1,7.64-7.6h8.76a7.59,7.59,0,0,1,7.62,7.6,3.17,3.17,0,0,1-1.13,2.43A16.66,16.66,0,0,1,22.76,39.58Z" 
                                fill={this.state.colorBtn}/>
                        </Svg>
                    </TouchableOpacity>
                    <View style={styles.ualogo}>
                        <Svg width='100%' height= '100%' viewBox="0 0 577.11 148.55"> 
                            <Path d="M470.28,394.39c-12,0-24.3,1.37-36.31,1.37,3,4.64,3,11.74,3,17.88v34.94c0,10.51,0,24.57-4.5,34.27,9.28,0,18.42.54,27.71.54,18.56,0,34.94-6.28,34.94-27.85,0-14.74-10.92-19.79-23.61-22.66v-.27c9.69-4.09,19.11-9.82,19.11-21.7s-9.69-16.52-20.34-16.52Zm-177.72,1.37c3,4.64,3,11.74,3,17.88v38.22c0,6.42-.54,25.66-4.64,31h37.81c2.73,0,5.6-.14,8.33-.41l2.59-12.83c-6.82,6.68-13.79,7.78-21.43,7.78H307.85V413.64c0-6.14,0-13.24,3-17.88Zm296.53,0c3.27,2.05,3.41,4,3.41,7.64v34.13c0,14.74-.55,36.31-5.6,43.54l-1.23,1.77h16.25c-3-4.5-3-13.37-3-24l.14-44.36c0-2,0-4.5,1.23-4.5s2.19,3.27,3.69,7.23l25.93,67L660.48,412c.41-1.09.82-2,1.77-2s1,1.63,1,3v45.31c0,7.65,0,17.75-2.46,24.58h20.06c-3-5.46-3.55-11.74-4.23-17.89-1.77-16.38-1.09-33.44-1.09-49.82,0-6.82-.41-14.19,2.73-19.38H664.3c-3.41,0-4.37,2.87-5.6,5.73l-23.61,56.94c-.82,1.91-1.23,3.27-2.46,3.27s-1.5-2.32-2.18-4.37l-20.2-59.51c-.54-1.78-2.59-2.05-4.23-2.05H589.09Zm-354,0-.14,3.68c0,11.2-28.11,69.76-35.89,79.58l-3,3.82h17.06a33.49,33.49,0,0,1-.41-5.18c0-7.78,6.14-21.16,12-33h30.72l14.88,38.22h14.74l-2.73-5c-13.65-25.25-22.39-54.87-31.13-82H235.14Zm143.62,0-.14,3.68c0,11.2-28.12,69.76-35.9,79.58l-3,3.82h17.06a33.49,33.49,0,0,1-.41-5.18c0-7.78,6.15-21.16,12-33H399.1L414,482.85h14.74L426,477.8c-13.65-25.26-22.39-54.88-31.12-82Zm154,0-.14,3.68c0,11.2-28.11,69.76-35.89,79.58l-3,3.82h17.06a33.49,33.49,0,0,1-.41-5.18c0-7.78,6.15-21.16,12-33H553.1L568,482.85h14.74L580,477.8c-13.65-25.26-22.39-54.88-31.12-82Zm190.5,0-.14,3.68c0,11.2-28.12,69.76-35.9,79.58l-3,3.82h17.06a33.49,33.49,0,0,1-.41-5.18c0-7.78,6.15-21.16,12-33H743.6l14.88,38.22h14.74l-2.73-5.05c-13.64-25.25-22.37-54.87-31.11-82H723.26Zm-265.54,4.09c11.19,0,19.52,1.78,19.52,14.06,0,14.47-12.29,18.29-24.3,18.29h-3.68V400.4c3-.27,5.86-.55,8.46-.55Zm-216.43,6.83c1.23,0,2.05,2.32,2.32,3.28l9.56,29.21H227.09L239,410c.27-.69,1.09-3.28,2.32-3.28Zm143.62,0c1.23,0,2,2.32,2.32,3.28l9.55,29.2H370.71L382.59,410c.27-.69,1.09-3.28,2.32-3.28Zm154,0c1.23,0,2.05,2.32,2.32,3.28l9.56,29.2H524.72L536.59,410c.27-.69,1.09-3.28,2.32-3.28Zm190.5,0c1.22,0,2,2.32,2.32,3.27l9.55,29.21H715.21L727.09,410c.27-.68,1.09-3.27,2.32-3.27ZM449.27,437.12h2.32c15.7,0,29.35,2.05,29.35,20.75,0,14.6-8.6,20.06-22.53,20.06-9.14,0-9.14-3.41-9.14-19.24V437.12Z" 
                                transform="translate(-196.11 -335.66)" fill={this.state.colorGray}/>
                            <Path d="M562.44,335.66c-4.86,0-8.92,3.17-8.92,7.36,0,4.41,2.9,6.33,5.49,8.33s7.22,4.42,7.22,8.34c0,3.48-2.36,5.13-5.44,5.13s-4.95-1.43-6.78-2.72l-1.91,2.58a13,13,0,0,0,8.78,3.26c5,0,9.67-3.21,9.67-8.16,0-4-2.49-6.87-6.77-10-4-2.89-5.93-4.54-5.93-6.77,0-2.41,1.74-4.24,4.86-4.24A10,10,0,0,1,568.1,341l2-2.23a10.09,10.09,0,0,0-7.71-3.12Zm148.85,0a15.29,15.29,0,0,0-15.61,15.6c0,9.32,6,16.68,15.61,16.68s15.6-7.36,15.6-16.68a15.29,15.29,0,0,0-15.6-15.6Zm-259.09.09-4.42.8,11.55,30.85h2.9l12.44-31.11-3.88-.54c-3.17,8.52-6.38,17.07-9.5,26.66h-.09c-3-9.59-6-18.14-9-26.66Zm190.22,0-4.68.9,9.4,17.25v13.5h4.33V353.9L662,336.29l-3.83-.54-8.2,14.8-7.54-14.8Zm-428.85.45v3.12h10V367.4h4.33V339.32h10V336.2Zm37.76,0v31.2h4.32V351.89H270.9V367.4h4.32V336.2H270.9v12.57H255.65V336.2Zm40.83,0v31.2h17.3v-3.12h-13V352.51h10.84v-3.12H296.48V339.32h11.06V336.2Zm53.4,0v19.08c0,8,3.53,12.66,12.31,12.66,7.53,0,11.86-5,11.86-12V336.2h-4.06v19.66c0,4.45-2,9.09-7.8,9.09-5.57,0-8-3.39-8-9.85V336.2Zm40.66,0v31.2h3.57V342.57h.09c1.87,2.72,13.5,16.72,20.28,24.83h3.39V336.2H410v24.87h-.09c-2.09-3.12-13.59-16.76-20.46-24.87Zm44.27,0v31.2h4.32V336.2Zm57.15,0v31.2h17.29v-3.12H492V352.51h10.83v-3.12H492V339.32H503V336.2Zm31.61,0v31.2h4.32V354.47h4.59l7.22,13.47,4.37-1.34L532,353.31c3-1.91,5.22-4.5,5.22-9.09,0-5.39-4-8-9.05-8Zm66.86,0v31.2h4.33V336.2Zm17.75,0v3.12h10V367.4h4.33V339.32h10V336.2Zm138.37,0v31.2h4.32V354.3h10.83v-3.13H746.55V339.32h11.06V336.2Zm-30.94,2.58c7.71,0,10.83,6.64,10.83,12.48,0,6.11-2.76,13.56-10.83,13.56s-10.83-7.45-10.83-13.56C700.46,345.42,703.58,338.78,711.29,338.78Zm-187.72.54h3.7c2.9,0,5.3,1.47,5.3,5.3,0,2.63-1,6.73-6.55,6.73h-2.45v-12Z" 
                                transform="translate(-196.11 -335.66)" fill={this.state.colorGray}/>
                        </Svg>
                    </View>
                    <TouchableOpacity style={styles.hamburger} onPress={() => this.props.navigation.navigate('Profile')}>
                        <Svg width='100%' height= '100%' viewBox="0 0 92.83 89.33"> 
                            <Path d="M89.83,0H3A3,3,0,0,0,0,3V16.33a3,3,0,0,0,3,3H89.83a3,3,0,0,0,3-3V3A3,3,0,0,0,89.83,0Z" 
                                fill={this.state.colorBtn}/>
                            <Path d="M89.83,35H3a3,3,0,0,0-3,3V51.33a3,3,0,0,0,3,3H89.83a3,3,0,0,0,3-3V38A3,3,0,0,0,89.83,35Z" 
                                fill={this.state.colorBtn}/>
                            <Path d="M89.83,70H3a3,3,0,0,0-3,3V86.33a3,3,0,0,0,3,3H89.83a3,3,0,0,0,3-3V73A3,3,0,0,0,89.83,70Z" 
                                fill={this.state.colorBtn}/>
                        </Svg>
                    </TouchableOpacity>
                </View> */}
                <View style={styles.svgWrapper}>
                    <Svg height= '100%' width = '100%'  viewBox="0 0 297.46 297.92">
                        {/* spiritual */}
                        <Path d="M113.71,63.34l-35-35.54a9.72,9.72,0,0,0-12.43-1.19C55.6,34,34.94,50,23.77,70.43A4.74,4.74,0,0,0,24.55,76L61.7,113.78a93.49,93.49,0,0,1,52-50.44" 
                            fill={this.state.colorDiagonal} fillOpacity = {this.state.fillOpacity1} onPressIn={()=> this.setState({fillOpacity1:.5})} 
                            onPressOut={()=> this.setState({fillOpacity1:1})} onPress={()=> this.props.navigation.navigate('Survey')} />
                        <Path d="M90.49,68V66.36H87.61V57.29H85.78V68ZM80.7,65.59h2L83,68H84.8l-2-10.66H80.57L78.6,68h1.77Zm1-6.18h0L82.44,64H81Zm-9.76,5.85a2.81,2.81,0,1,0,5.61,0v-8H75.71v8.05c0,.78-.31,1.16-1,1.16s-1-.38-1-1.16V57.29H71.93ZM67.24,68h1.83V58.88h1.78V57.29H65.47v1.59h1.77ZM64.16,57.29H62.33V68h1.83Zm-7.64,6.29a8.66,8.66,0,0,0,.95,0L58.77,68h1.86l-1.55-4.83c.62-.28,1.28-1,1.28-2.69,0-2.27-1-3.14-3.1-3.14H54.69V68h1.83Zm0-4.79h.65c1,0,1.36.37,1.36,1.64s-.37,1.64-1.36,1.64h-.65Zm-3.85-1.5H50.84V68h1.83ZM45,68V63.58h.8c2.26,0,3.31-.87,3.31-3.15s-1-3.14-3.31-3.14H43.2V68Zm0-9.16h.71c1.2,0,1.57.37,1.57,1.64s-.37,1.64-1.57,1.64H45Zm-3.31.93a2.55,2.55,0,0,0-2.54-2.58c-1.8,0-2.83,1-2.83,2.66,0,3.06,3.72,3.62,3.72,5.73a.94.94,0,0,1-1.06,1c-.6,0-1-.53-1.1-1.61l-1.74.25a2.82,2.82,0,0,0,2.75,3,2.61,2.61,0,0,0,2.89-2.73c0-2.9-3.72-3.77-3.72-5.59,0-.66.32-1.05.92-1.05.41,0,.9.27,1,1.19Z" 
                            fill={this.state.colorTxt} fillOpacity = {this.state.fillOpacity1} onPressIn={()=> this.setState({fillOpacity1:.5})} 
                            onPressOut={()=> this.setState({fillOpacity1:1})} onPress={()=> this.props.navigation.navigate('Survey')}/>
                        {/* social */}
                        <Path d="M58.3,123.29,20.81,86.8a3,3,0,0,0-4.73.73c-32.23,59.13-7.28,111.92.07,125.13a2.85,2.85,0,0,0,4.47.66l38.23-36.88a90.93,90.93,0,0,1-.55-53.15" 
                            fill={this.state.colorVertical}  fillOpacity = {this.state.fillOpacity2} onPressIn={()=> this.setState({fillOpacity2:.5})} 
                            onPressOut={()=> this.setState({fillOpacity2:1})} onPress={()=> alert("Social")}/>
                        <Path d="M45.21,157.58V156H42.33v-9.07H40.5v10.66Zm-9.79-2.36h2l.32,2.36h1.77l-2-10.66H35.29l-2,10.66H35.1Zm1-6.17h0l.72,4.58H35.69ZM32,146.92H30.18v10.66H32Zm-3.95,3.56v-.78a2.64,2.64,0,0,0-2.71-2.93,2.57,2.57,0,0,0-2.81,2.73V155a2.57,2.57,0,0,0,2.81,2.73A2.53,2.53,0,0,0,28.06,155v-1.23H26.23v1.29c0,.69-.22,1.08-.88,1.08s-1-.39-1-1.19v-5.4c0-.8.24-1.18,1-1.18.47,0,.88.38.88,1.28v.83ZM17,149.55c0-.8.23-1.18,1-1.18s1,.38,1,1.18V155c0,.8-.24,1.19-1,1.19s-1-.39-1-1.19ZM15.16,155a2.56,2.56,0,0,0,2.8,2.73A2.57,2.57,0,0,0,20.77,155v-5.5A2.57,2.57,0,0,0,18,146.77a2.56,2.56,0,0,0-2.8,2.73Zm-1.48-5.64a2.56,2.56,0,0,0-2.54-2.59c-1.8,0-2.83,1-2.83,2.66,0,3.06,3.72,3.62,3.72,5.73a1,1,0,0,1-1.07,1c-.59,0-1-.54-1.09-1.61l-1.74.25a2.81,2.81,0,0,0,2.74,2.95,2.61,2.61,0,0,0,2.9-2.73c0-2.9-3.72-3.77-3.72-5.59,0-.66.32-1,.91-1,.42,0,.9.26,1,1.18Z" 
                            fill={this.state.colorTxtV} fillOpacity = {this.state.fillOpacity2} onPressIn={()=> this.setState({fillOpacity2:.5})} 
                            onPressOut={()=> this.setState({fillOpacity2:1})} onPress={()=> alert("Social")}/>
                        {/* physical */}
                        <Path d="M61.7,184.14,24.63,221.82a4.87,4.87,0,0,0-.8,5.77c12.56,22.86,37,40.21,46,46A4.89,4.89,0,0,0,76,273l37.76-38.39a93.49,93.49,0,0,1-52-50.44" 
                            fill={this.state.colorDiagonal} fillOpacity = {this.state.fillOpacity3} onPressIn={()=> this.setState({fillOpacity3:.5})} 
                            onPressOut={()=> this.setState({fillOpacity3:1})} onPress={()=> alert("Physical")}/>
                        <Path d="M86.14,237.94v-1.59H83.26v-9.07H81.43v10.66Zm-9.8-2.36h2l.33,2.36h1.77l-2-10.66H76.21l-2,10.66H76Zm1-6.17h0l.73,4.58H76.61Zm-4.24,1.43v-.78a2.64,2.64,0,0,0-2.71-2.93,2.57,2.57,0,0,0-2.81,2.73v5.5a2.56,2.56,0,0,0,2.81,2.73,2.53,2.53,0,0,0,2.71-2.73v-1.23H71.27v1.29c0,.69-.23,1.08-.89,1.08s-1-.39-1-1.18v-5.41c0-.8.24-1.18,1-1.18.47,0,.89.38.89,1.28v.83Zm-7.54-3.56H63.72v10.66h1.83ZM62,229.72a2.56,2.56,0,0,0-2.54-2.59c-1.8,0-2.84,1-2.84,2.66,0,3.06,3.73,3.62,3.73,5.73a1,1,0,0,1-1.07,1c-.59,0-1-.53-1.09-1.61l-1.74.25a2.8,2.8,0,0,0,2.74,3,2.61,2.61,0,0,0,2.9-2.73c0-2.9-3.72-3.77-3.72-5.58,0-.67.32-1.05.91-1.05.42,0,.9.26,1,1.18Zm-8.33,3.79,2.21-6.23H54l-1.22,4.06h0l-1.28-4.06H49.61l2.22,6.23v4.43h1.83Zm-8.86,4.43v-4.72h2v4.72h1.83V227.28H46.75v4.34h-2v-4.34H43v10.66Zm-7.39,0v-4.37h.8c2.26,0,3.31-.87,3.31-3.14s-1.05-3.15-3.31-3.15H35.58v10.66Zm0-9.15h.71c1.2,0,1.57.37,1.57,1.64s-.37,1.64-1.57,1.64h-.71Z" 
                            fill={this.state.colorTxt} fillOpacity = {this.state.fillOpacity3} onPressIn={()=> 
                            this.setState({fillOpacity3:.5})} onPressOut={()=> this.setState({fillOpacity3:1})} 
                            onPress={()=> alert("Physical")}/>
                        {/* psychological */}
                        <Path d="M123.47,237.81l-38.26,39.3a3,3,0,0,0,.73,4.73c59.13,32.23,111.92,7.28,125.13-.07a2.85,2.85,0,0,0,.66-4.47l-38-39.41a96.42,96.42,0,0,1-50.24-.08" 
                            fill={this.state.colorVertical} fillOpacity = {this.state.fillOpacity4} onPressIn={()=> this.setState({fillOpacity4:.5})} 
                            onPressOut={()=> this.setState({fillOpacity4:1})} onPress={()=> alert("Psychological")}/>
                        <Path d="M191.55,275.6V274h-2.88v-9.07h-1.83V275.6Zm-9.79-2.36h2l.32,2.36h1.78l-2-10.66h-2.27l-2,10.66h1.77Zm1-6.18h0l.72,4.58H182Zm-4.24,1.44v-.79a2.64,2.64,0,0,0-2.72-2.92,2.55,2.55,0,0,0-2.8,2.73V273a2.76,2.76,0,0,0,5.52,0v-1.23h-1.83v1.29c0,.69-.22,1.07-.89,1.07s-1-.38-1-1.18v-5.4c0-.8.24-1.19,1-1.19.48,0,.89.39.89,1.29v.83ZM171,264.94h-1.82V275.6H171Zm-6.94,6.7h1.17v1c0,1.06-.26,1.47-1,1.47s-.86-.44-.86-1.12v-5.48c0-.9.37-1.17.81-1.17.73,0,1.05.42,1.05,2h1.74v-.68a2.66,2.66,0,0,0-2.74-2.92,2.52,2.52,0,0,0-2.69,2.73V273a2.44,2.44,0,0,0,2.45,2.73,2.14,2.14,0,0,0,1.85-.95l.34.8H167v-5.4h-3Zm-8.08-4.07c0-.8.24-1.19,1-1.19s1,.39,1,1.19V273c0,.8-.24,1.18-1,1.18s-1-.38-1-1.18ZM154.11,273a2.81,2.81,0,0,0,5.62,0v-5.5a2.81,2.81,0,0,0-5.62,0ZM153,275.6V274h-2.88v-9.07h-1.83V275.6Zm-10.17-8c0-.8.23-1.19,1-1.19s1,.39,1,1.19V273c0,.8-.24,1.18-1,1.18s-1-.38-1-1.18ZM141,273a2.81,2.81,0,0,0,5.61,0v-5.5a2.81,2.81,0,0,0-5.61,0Zm-5.56,2.58v-4.73h1.95v4.73h1.83V264.94h-1.83v4.34h-1.95v-4.34H133.6V275.6Zm-3.69-7.1v-.79a2.64,2.64,0,0,0-2.72-2.92,2.55,2.55,0,0,0-2.8,2.73V273a2.76,2.76,0,0,0,5.52,0v-1.23h-1.83v1.29c0,.69-.22,1.07-.89,1.07s-1-.38-1-1.18v-5.4c0-.8.23-1.19,1-1.19.48,0,.89.39.89,1.29v.83ZM123,271.17l2.21-6.23h-1.86L122.1,269h0l-1.29-4.06h-1.86l2.22,6.23v4.43H123Zm-4.79-3.8a2.56,2.56,0,0,0-2.54-2.58c-1.8,0-2.83,1-2.83,2.66,0,3.05,3.72,3.62,3.72,5.73a.94.94,0,0,1-1.07,1c-.59,0-1-.53-1.09-1.61l-1.74.25a2.81,2.81,0,0,0,2.75,3,2.61,2.61,0,0,0,2.89-2.73c0-2.9-3.72-3.77-3.72-5.59,0-.66.32-1.05.91-1.05.42,0,.91.27,1,1.19Zm-10.63,8.23v-4.37h.8c2.26,0,3.3-.87,3.3-3.15s-1-3.14-3.3-3.14h-2.63V275.6Zm0-9.16h.71c1.19,0,1.56.37,1.56,1.64s-.37,1.64-1.56,1.64h-.71Z" 
                            fill={this.state.colorTxtV} fillOpacity = {this.state.fillOpacity4} 
                            onPressIn={()=> this.setState({fillOpacity4:.5})} onPressOut={()=> this.setState({fillOpacity4:1})} 
                            onPress={()=> alert("Psychological")}/>
                        {/* financial */}
                        <Path d="M183.88,234.53,221.72,273a4.85,4.85,0,0,0,6.1.66c8.94-5.82,33.44-23.19,46-46.08a4.86,4.86,0,0,0-.8-5.74L235.82,184a93.53,93.53,0,0,1-51.94,50.52" 
                            fill={this.state.colorDiagonal} fillOpacity = {this.state.fillOpacity5} onPressIn={()=> this.setState({fillOpacity5:.5})} 
                            onPressOut={()=> this.setState({fillOpacity5:1})} onPress={()=> alert("Financial")}/>
                        <Path d="M261.62,238.37v-1.6h-2.88v-9.06h-1.83v10.66ZM251.83,236h2l.32,2.37h1.77l-2-10.66h-2.28l-2,10.66h1.77Zm1-6.17h0l.72,4.58h-1.48Zm-4.41-2.12h-1.82v10.66h1.82Zm-3.94,3.55v-.78a2.64,2.64,0,0,0-2.71-2.92,2.56,2.56,0,0,0-2.81,2.73v5.49a2.57,2.57,0,0,0,2.81,2.74,2.54,2.54,0,0,0,2.71-2.74v-1.22h-1.83v1.28c0,.7-.22,1.08-.88,1.08s-1-.38-1-1.18v-5.41c0-.79.24-1.18,1-1.18.47,0,.88.39.88,1.29v.82Zm-11.25,7.11v-6.66h0l2.33,6.66h1.6V227.71h-1.66v6.09h0l-2.23-6.09h-1.69v10.66ZM226.4,236h2l.33,2.37h1.77l-2-10.66h-2.28l-2,10.66h1.77Zm1-6.17h0l.73,4.58h-1.48Zm-8.11,8.54v-6.66h0l2.33,6.66h1.59V227.71h-1.65v6.09h0l-2.23-6.09h-1.7v10.66Zm-3.68-10.66h-1.83v10.66h1.83Zm-6.81,10.66v-4.73h2.45v-1.59h-2.45V229.3h3.28v-1.59H207v10.66Z" 
                            fill={this.state.colorTxt} fillOpacity = {this.state.fillOpacity5} onPressIn={()=> this.setState({fillOpacity5:.5})} 
                            onPressOut={()=> this.setState({fillOpacity5:1})} onPress={()=> alert("Financial")}/>
                        {/* career */}
                        <Path d="M280.83,87.32a2.84,2.84,0,0,0-4.47-.63l-37.45,36.68a90.88,90.88,0,0,1-.06,53.15l38.28,36.69a3,3,0,0,0,4.72-.76c31.78-59.38,6.43-112-1-125.13" 
                            fill={this.state.colorVertical} fillOpacity = {this.state.fillOpacity6} onPressIn={()=> this.setState({fillOpacity6:.5})} 
                            onPressOut={()=> this.setState({fillOpacity6:1})} onPress={()=> alert("Career")}/>
                        <Path d="M286.64,153.21a9,9,0,0,0,.95,0l1.3,4.41h1.86l-1.55-4.83c.62-.28,1.28-1,1.28-2.68,0-2.28-1.05-3.15-3.1-3.15h-2.57v10.66h1.83Zm0-4.78h.65c1,0,1.36.36,1.36,1.64s-.37,1.64-1.36,1.64h-.65Zm-3.28,9.15V156h-3.28v-3.13h2.37v-1.6h-2.37v-2.75h3.07v-1.59h-4.9v10.66Zm-6.56,0V156h-3.27v-3.13h2.36v-1.6h-2.36v-2.75h3.07v-1.59h-4.9v10.66Zm-10.66-4.37a8.89,8.89,0,0,0,.95,0l1.3,4.41h1.86l-1.55-4.83c.62-.28,1.28-1,1.28-2.68,0-2.28-1.05-3.15-3.1-3.15h-2.57v10.66h1.83Zm0-4.78h.65c1,0,1.36.36,1.36,1.64s-.37,1.64-1.36,1.64h-.65Zm-7,6.79h2l.32,2.36h1.78l-2-10.66H259l-2,10.66h1.77Zm1-6.17h0l.72,4.58h-1.47Zm-4.24,1.43v-.78a2.64,2.64,0,0,0-2.72-2.93,2.56,2.56,0,0,0-2.8,2.73V155a2.56,2.56,0,0,0,2.8,2.73,2.53,2.53,0,0,0,2.72-2.73v-1.23h-1.83v1.29c0,.69-.22,1.08-.89,1.08s-1-.39-1-1.19v-5.4c0-.8.24-1.18,1-1.18.48,0,.89.38.89,1.28v.83Z" 
                            fill={this.state.colorTxtV} fillOpacity = {this.state.fillOpacity6} onPressIn={()=> this.setState({fillOpacity6:.5})} 
                            onPressOut={()=> this.setState({fillOpacity6:1})} onPress={()=> alert("Career")}/>
                        {/* academic */}
                        <Path d="M235.82,113.91,273,76.07a4.8,4.8,0,0,0,.8-5.7c-12.57-22.92-37.1-40.3-46-46.12a4.83,4.83,0,0,0-6.08.67L183.88,63.39a93.53,93.53,0,0,1,51.94,50.52" 
                            fill={this.state.colorDiagonal} fillOpacity = {this.state.fillOpacity7} onPressIn={()=> this.setState({fillOpacity7:.5})} 
                            onPressOut={()=> this.setState({fillOpacity7:1})} onPress={()=> alert("Academic")}/>
                        <Path d="M258.13,60.78V60a2.64,2.64,0,0,0-2.72-2.92,2.57,2.57,0,0,0-2.81,2.73v5.5A2.57,2.57,0,0,0,255.41,68a2.54,2.54,0,0,0,2.72-2.73V64.07H256.3v1.29c0,.69-.23,1.08-.89,1.08s-1-.39-1-1.19v-5.4c0-.8.24-1.18,1-1.18.47,0,.89.38.89,1.28v.83Zm-7.55-3.56h-1.83V67.88h1.83Zm-6.17,0-1.3,6.23h0l-1.3-6.23h-2.41V67.88H241V59.55h0l1.66,8.33h.88l1.66-8.33h0v8.33h1.59V57.22ZM238,67.88V66.29h-3.27V63.15h2.36V61.56h-2.36V58.81h3.07V57.22h-4.9V67.88Zm-12.49,0h2.72c1.89,0,2.89-1,2.89-3.22V60.44c0-2.19-1-3.22-2.89-3.22h-2.72Zm1.83-9.16H228c1,0,1.31.37,1.31,1.5v4.66c0,1.13-.34,1.5-1.31,1.5h-.64Zm-7,6.8h2l.33,2.36h1.77l-2-10.66h-2.27l-2,10.66H220Zm1-6.18h0l.73,4.58h-1.48Zm-4.24,1.44V60a2.64,2.64,0,0,0-2.71-2.92,2.57,2.57,0,0,0-2.81,2.73v5.5A2.57,2.57,0,0,0,214.4,68a2.53,2.53,0,0,0,2.71-2.73V64.07h-1.83v1.29c0,.69-.22,1.08-.88,1.08s-1-.39-1-1.19v-5.4c0-.8.24-1.18,1-1.18.47,0,.88.38.88,1.28v.83Zm-10.69,4.74h2l.32,2.36h1.78l-2-10.66h-2.27l-2,10.66h1.78Zm1-6.18h0l.72,4.58h-1.47Z" 
                            fill={this.state.colorTxt} fillOpacity = {this.state.fillOpacity7} onPressIn={()=> this.setState({fillOpacity7:.5})} 
                            onPressOut={()=> this.setState({fillOpacity7:1})} onPress={()=> alert("Academic")}/>
                        {/* <!-- alabama model --> */}
                        <Path d="M173.55,60l38.13-39.18a3,3,0,0,0-.72-4.73C151.82-16.15,99,8.8,85.82,16.15a2.86,2.86,0,0,0-.66,4.47L123.3,60.15A96.46,96.46,0,0,1,173.55,60" 
                            fill={this.state.colorVertical}/>
                        <Path d="M173.55,60l38.13-39.18a3,3,0,0,0-.72-4.73C151.82-16.15,99,8.8,85.82,16.15a2.86,2.86,0,0,0-.66,4.47L123.3,60.15A96.46,96.46,0,0,1,173.55,60" 
                            fill="#63948e" fillOpacity="0.09" style="mix-blend-mode:multiply"/>
                        <Path d="M171.77,33.74H168.9V44.89h6.91V42.33h-4Zm-5.45,0h-7V44.89h7.1V42.36H162.2v-2H166V37.87H162.2V36.29h4.12Zm-15.92,2.6h1.35c3.55,0,3.55,5.95,0,5.95H150.4Zm1.35-2.6h-4.2V44.89h4.2c7.26,0,7.26-11.12,0-11.15m-14.86,5.59a2.8,2.8,0,1,1,5.59,0,2.8,2.8,0,1,1-5.59,0m8.51,0c0-7.71-11.44-7.71-11.44,0s11.44,7.73,11.44,0m-19.05-.78L122,33.71h-1V44.89h2.91v-5l2.36,2.48h.32l2.37-2.48v5h2.91V33.71h-1Z" 
                            fill={this.state.colorTxtV}/>
                        <Path d="M182.93,23.89h-2.51L181.66,21Zm1.59,3.85h2.79v-.42l-5-10.87h-1.23l-5,10.87v.42h2.78l.66-1.4h4.39ZM169.14,21.4l-4.36-4.84h-1.05V27.74h2.91v-5L169,25.25h.32l2.37-2.48v5h2.91V16.56h-1ZM157.9,23.89h-2.52L156.62,21Zm1.59,3.85h2.79v-.42l-5-10.87H156l-5,10.87v.42h2.79l.65-1.4h4.4Zm-13-8.6a.92.92,0,0,1,0,1.83h-1.8V19.14Zm.48,4.17c1.15,0,1.16,1.9,0,1.9h-2.27v-1.9ZM150.21,20a3.43,3.43,0,0,0-3.48-3.43H142V27.74h5.23a3.3,3.3,0,0,0,3.47-3.52,2.41,2.41,0,0,0-1.34-2.28,2.64,2.64,0,0,0,.88-1.92m-14.08,3.87h-2.52L134.86,21Zm1.59,3.85h2.79v-.42l-5-10.87h-1.23l-5,10.87v.42H132l.65-1.4h4.4ZM124.14,16.59h-2.87V27.74h6.91V25.18h-4Zm-8.68,7.31h-2.55L114.17,21ZM117,27.74h2.78v-.42l-5-10.87h-1.23l-5,10.87v.42h2.78l.66-1.4h4.39Z" 
                            fill={this.state.colorTxtV}/>
                        {/* <!-- alabama a --> */}
                        <Path d="M197.75,190.24c-9.81,5.06-17.19,4-18-2.12-.89-6.84-.4-16.46-.08-20.13.12-1.35.53-5.69.79-7,3.35-.7,7.83-2.34,7.83,3.49,1.69-.87,4.8-3.41,5.33-6.12,3-14-11.69-10.31-11.69-10.31,3.57-16.52,7.41-34.1,15.59-48.62l-8.15-3.9c-5.52,4.22-11.08,8.5-15.72,9.19-4.23,1-30.12,3-28.3-8.8-2.89.24-4.52,3.64-4.5,6.57.94,12.79,17.55,10.26,27.67,11.51a351,351,0,0,0-27.91,40.63c-6.57,1.26-7.44-6.89-6.32-9.14a9.74,9.74,0,0,0-6,6c-2,5,.27,13.43,7.34,13.9-7,12.32-15.4,32.5-32.58,28.47-5.75-1.19-12.46-10.92-9-16.71,2.13-3-1-5.05-4.66-.65-8.92,9.84-.31,29.49,18.37,28.31,20.08.43,33.63-24.53,40.94-39.35l19.05-3L166.57,178C164.17,216.61,192,201.7,192,201.7c3.87-1.76,7.92-6,7.82-10.92C199.59,189.12,198.67,189.77,197.75,190.24ZM169.4,150.86,155,152.62c7.18-11.49,11.11-22.12,22.69-33.77C174.49,129,171.89,140.58,169.4,150.86Z" 
                            fill={this.state.colorGray}/>
                        {/* <!-- circle around r --> */}
                        <Path d="M201.68,198.49a2.49,2.49,0,1,0,2.49,2.49A2.48,2.48,0,0,0,201.68,198.49Zm0,4.44a2,2,0,1,1,1.95-2A1.95,1.95,0,0,1,201.68,202.93Z" 
                            fill={this.state.colorGray}/>
                        {/* <!-- registered trademark --> */}
                        <Path d="M202.7,200.4a.84.84,0,0,0-.84-.84h-1.2v2.84h.52v-1.16h.39l.54,1.16h.59l-.56-1.2A.85.85,0,0,0,202.7,200.4Zm-.84.31h-.68v-.62h.68a.31.31,0,1,1,0,.62Z" 
                            fill={this.state.colorGray}/>
                    </Svg>
                </View>
                {/* <View style={styles.bottomButtonContainer}> */}
                    {/* <TouchableOpacity
                        style={[styles.buttonContainer, styles.loginButton]}
                        onPress={() => this.props.navigation.navigate('Journal')}>
                        <Text style={styles.loginButtonText}>Journal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttonContainer, styles.loginButton]}
                        onPress={() => this.props.navigation.navigate('Profile')}>
                        <Text style={styles.loginButtonText}>Trend Chart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttonContainer, styles.loginButton]}
                        onPress={() => this.props.navigation.navigate('Profile')}>
                        <Text style={styles.loginButtonText}>Badges</Text>
                    </TouchableOpacity> */}
                {/* </View> */}
                {/* <View style={styles.bottomBar}>
                    <Footer navigation={this.props.navigation}/> 
                </View> */}
            </View>
        );
    }
    
    
};

export default HomeScreen;