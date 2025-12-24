
        window.onload = function() {
            // Disable scrolling when the roadblock is displayed
            document.body.style.overflow = 'hidden';
        
            // Hide the roadblock after 10 seconds and re-enable scrolling
           
            // Set the close button functionality
            document.querySelector('.roadblock_skip').onclick = function(event) {
                skipAd(event);
            }
        
            // Skip the ad after 6 seconds
            setTimeout(function() {
                skipAd();
            }, 6000); // Adjust the delay as needed (6000ms = 6 seconds)
        }
        
        function skipAd(event) {
            const roadblock = document.querySelector('.roadblock');
            roadblock.style.opacity = '0';
            setTimeout(() => {
                roadblock.style.display = 'none';
                document.getElementById('roadblock-wrap').style.pointerEvents = 'none';
                document.body.style.overflow = ''; // Re-enable scrolling
            }, 1000); // Match the transition duration
        }
        