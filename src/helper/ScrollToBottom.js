import moment from 'moment'
import {animateScroll} from 'react-scroll'

export const scrollToBottom = (id) => {
    animateScroll.scrollToBottom({
        containerId: id,
        duration: 0
    })
}

export const scrollToBottomAnimated = (id) => {
    animateScroll.scrollToBottom({
        containerId: id,
        duration: 250
    })
}

export const scrollToTopAnimated = (id) => {
    animateScroll.scrollToTop({
        containerId: id,
        duration: 500
    })
}

export const scrollToTopAnimatedPost = (id) => {
    animateScroll.scrollToTop({
        containerId: id,
        duration: 0
    })
}

export const timeMonth = (date) => {
    const todayMonth = moment(date)

    return todayMonth.format('HH:mm a | MMMM Do')
}