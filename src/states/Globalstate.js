import { createState } from "@hookstate/core";

export let bizdata = createState(
 [
  {
   name:"Home Slice Pizza"
   ,description:"Home Slice Pizza is an independent neighborhood pizza join serving authentic NY-style-pizza by the pie or by the slice to nice people like you"
   ,hours:"11AM-11PM"
   ,address:"1415 S Congress Ave Austin, TX 78704"
  }
  , {
   name:"Joe's Coffee"
   ,description:"Stumptown coffee, baked goods & sandwiches in colorful digs with outdoor area for people-watching"
   ,hours:"7AM-9PM"
   ,address:"242 W 2nd St Austin, TX 78701"
  }
  , {
   name:"Planet Fitness"
   ,description:"Free weight and machine gym perfect for beginners, intermediate, or professional lifters"
   ,hours:"24hrs"
   ,address:"1807 W Slaughter Ln Austin, TX 78748"
  }
  , {
   name:"SummerMoon"
   ,description:"SummerMoon Coffee bar is a perfect blend of nature and coffee, here to serve you!"
   ,hours:"6AM-8PM"
   ,address:"6711 Menchaca RD Austin, TX 78745"
  }
 ]
 )