import React from 'react'
import Weather from './Weather'

export default {
    title: "Weather",
    component: Weather
}

const Template = (args) => <Weather {...args} />

export const WeatherCloud = Template.bind({})
// temperature={10} state="clouds"
WeatherCloud.args = { temperature: 10, state: 'clouds' }

export const WeatherSunny = Template.bind({})
// temperature={10} state="clear"
WeatherSunny.args = { temperature: 10, state: 'clear' }