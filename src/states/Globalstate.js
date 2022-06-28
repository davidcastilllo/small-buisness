import { createState } from "@hookstate/core";

export let bizdata = createState(
 [
  {
   name:"Home Slice Pizza"
   ,description:"Home Slice Pizza is an independent neighborhood pizza join serving authentic NY-style-pizza by the pie or by the slice to nice people like you"
   ,hours:"11AM-11PM"
   ,address:"1415 S Congress Ave Austin, TX 78704"
   ,lat: 30.249200
   ,long: -97.749440
  }
  , {
   name:"Joe's Coffee"
   ,description:"Stumptown coffee, baked goods & sandwiches in colorful digs with outdoor area for people-watching"
   ,hours:"7AM-9PM"
   ,address:"242 W 2nd St Austin, TX 78701"
   ,lat: 30.265079
   ,long: -97.746147
  }
  , {
   name:"Planet Fitness"
   ,description:"Free weight and machine gym perfect for beginners, intermediate, or professional lifters"
   ,hours:"24hrs"
   ,address:"1807 W Slaughter Ln Austin, TX 78748"
   ,lat: 30.171330
   ,long: -97.823300
  }
  , {
   name:"SummerMoon"
   ,description:"SummerMoon Coffee bar is a perfect blend of nature and coffee, here to serve you!"
   ,hours:"6AM-8PM"
   ,address:"6711 Menchaca RD Austin, TX 78745"
   ,lat: 30.204900
   ,long: -97.806190
  }
 ]
 )