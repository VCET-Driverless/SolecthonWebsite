$(function () {
        var fx = function fx() {
          var dfd = $(".stat-number").map(function (i, el) {
              var data = parseInt(this.dataset.n, 10);
              var props = {
                "from": {
                    "count": 0
                },
                "to": {
                    "count": data
                }
              };
            return $(props.from).animate(props.to, {
                duration: 1000 * 1,
                step: function (now, fx) {
                    $(el).text(Math.ceil(now));
                },
                complete: function() {
                   if (el.dataset.sym !== undefined) {
                  el.textContent = el.textContent.concat(el.dataset.sym)
                   }
                }
            }).promise();
        }).toArray();
            // return jQuery promise when all animations complete
            return $.when.apply($, dfd);
        };
        
        var reset = function reset() {
          console.log($(this).scrollTop());
            // do stuff when window `.scrollTop()` > 75
            if ($(this).scrollTop() > 50) {
              // turn off scroll event so `fx` not called
              // during ongoing animation
              $(this).off("scroll");
                // when all animations complete
                fx()
            }
        };
        // if `fx` should only be called once ,
        // change `.on()` to `.one()` ,
        // remove `.then()` callback following `fx()`
        // within `reset`
        $(window).on("scroll", reset);
    });