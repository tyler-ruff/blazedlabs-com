
export default function readingTime(content) {
    const WPS = 275 / 60
  
    var images = 0
    const regex = /\w/
  
    let words = content.split(' ').filter((word) => {
      if (word.includes('<img')) {
        images += 1
      }
      return regex.test(word)
    }).length
  
    var imageAdjust = images * 4
    var imageSecs = 0
    var imageFactor = 12
  
    while (images) {
      imageSecs += imageFactor
      if (imageFactor > 3) {
        imageFactor -= 1
      }
      images -= 1
    }
  
    const minutes = Math.ceil(((words - imageAdjust) / WPS + imageSecs) / 60);
    
    let timeDuration = "";
    
    if(minutes === 1){
        timeDuration = "minute";
    } else {
        timeDuration = "minutes";
    }

    // Handle >60m (rare)
    if(minutes >= 60){
        const hours = Math.ceil(minutes / 60);
        if(hours === 1){
            timeDuration = "hour";
        } else {
            timeDuration = "hours";
        }
        return hours + " " + timeDuration + " read";
    }

    return minutes + " " + timeDuration + " read";
  }