import React from "react";




const Genre = (props) => {
    console.log(props)
    let myColorVariable;
    switch(props.genre) {
        case 'Action' :
            myColorVariable = 'blue'
            break
            case 'Fantasy':
                myColorVariable = 'green'
                break
                case 'Crime':
                    myColorVariable = 'orange'
                    break
                    case 'ScienceFiction':
                        myColorVariable = 'violet'
                        break
                        case 'Horror':
                            myColorVariable = 'black'
                            break
                            case 'Animation':
                                myColorVariable = '#112233'
                                break
                                case 'Comedy':
                                    myColorVariable = '#223344'
                                    break
                                    case 'Drama':
                                        myColorVariable = '334455'
                                        break
                                        case 'Family':
                                            myColorVariable = '#445566'
                                            break
                                            case 'Music':
                                                myColorVariable = '#556677"'
                                                break
                                                case 'Mystery':
                                                    myColorVariable = '#667788'
                                                    break
                                                    case 'History':
                                                        myColorVariable = '#778899'
                                                        break
                                                        case 'Romance':
                                                            myColorVariable = '#889900'
                                                            break
                                                            case 'War':
                                                                myColorVariable = '#990000'
                                                                break
                                                                case 'TVMovie':
                                                                    myColorVariable = '#000000'
                                                                    break
                                                                    case 'Western':
                                                                        myColorVariable = '#aaaaaa'
                                                                        break
                                                                        case 'Documentary':
                                                                            myColorVariable = '#bbbbbb'
                                                                            break
    }
    return (
        <div className="Genre">
            <p style={{backgroundColor: 'blue', color: myColorVariable}} > {props.genre.name} </p>
        </div>
    )
};

export default Genre;