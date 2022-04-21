import React from 'react'
import { twitch, twitter, instagram } from '../assets'

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://www.twitch.tv/xiciel">
            <img src={twitch} alt="" />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/xiciell">
            <img src={twitter} alt="" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/xicielll/">
            <img src={instagram} alt="" />
          </a>
        </li>
      </ul>
      <p>&copy; 2022 <a href="https://www.twitch.tv/xiciel">Xiciel</a></p>
    </footer>
  )
}

export default Footer