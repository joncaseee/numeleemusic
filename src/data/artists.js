// src/data/artists.js

const artists = [
    {
      alias: "CIPHER",
      photoUrl: "https://i.imgur.com/ua3zbm7.png",
      socialLinks: [
        "https://facebook.com/soundsbycipher",
        "https://instagram.com/soundsbycipher",
        "https://x.com/soundsbycipher"
      ],
      streamingLinks: [
        "https://music.apple.com/artist/cipher",
        "https://open.spotify.com/artist/6NKnMlRfpW2ih2oIgA7LpS",
        "https://music.youtube.com/channel/UCg5U8E_pvq6zi6cStL6TPXQ"
      ],
      embeddedContent: `
        <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" 
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1697037294&color=%238b0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
        </iframe>
        <div style="font-size: 10px; color: #cccccc; line-break: anywhere; word-break: normal; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; 
          font-family: Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif; font-weight: 100;">
          <a href="https://soundcloud.com/soundsbycipher" title="cipher" target="_blank" style="color: #cccccc; text-decoration: none;">cipher</a> · 
          <a href="https://soundcloud.com/soundsbycipher/newmellymoney" title="New Melly Money (Free DL)" target="_blank" style="color: #cccccc; text-decoration: none;">
            New Melly Money (Free DL)
          </a>
        </div>
      `
    },
    {
      alias: "T4C0",
      photoUrl: "https://i.imgur.com/c4WQjrp.png",
      socialLinks: [
        "https://facebook.com/T4C0",
        "https://instagram.com/T4C0",
        "https://x.com/T4C0"
      ],
      streamingLinks: [
        "https://music.apple.com/artist/t4c0",
        "https://open.spotify.com/artist/6NKnMlRfpW2ih2oIgA7LpS",
        "https://music.youtube.com/channel/UCg5U8E_pvq6zi6cStL6TPXQ"
      ],
      embeddedContent: `
        <iframe src='https://youtube.com/embed/abcdefg' width='100%' height='315' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>
      `
    },
    {
      alias: "FEELINGS MUTUAL",
      photoUrl: "https://i.imgur.com/4tINgGf.png",
      socialLinks: [
        "https://facebook.com/FEELINGSMUTUAL",
        "https://instagram.com/FEELINGSMUTUAL",
        "https://x.com/FEELINGSMUTUAL"
      ],
      streamingLinks: [
        "https://music.apple.com/artist/feelings-mutual",
        "https://open.spotify.com/artist/6NKnMlRfpW2ih2oIgA7LpS",
        "https://music.youtube.com/channel/UCg5U8E_pvq6zi6cStL6TPXQ"
      ],
      embeddedContent: `
        <iframe src='https://soundcloud.com/embed/987654321' width='100%' height='166' frameborder='no' allow='autoplay'></iframe>
      `
    }
  ];
  
  export function getArtists() {
    return artists;
  }
  
  export function getArtistByAlias(alias) {
    return artists.find(artist => artist.alias === alias);
  }
  