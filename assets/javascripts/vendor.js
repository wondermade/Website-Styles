function vidbg(e,t){var o,d,i=[],u=t.length;if(document.createElement("video").canPlayType){for(i.push('<video autoplay="true" loop="loop" muted="muted" volume="0">'),t.reverse();u--;)d=t[u],i.push('<source src="',d.src,'" type="video/',d.type,'" />');i.push("</video>"),o=document.createElement("div"),o.setAttribute("class","vidbg"),o.innerHTML=i.join(""),e.appendChild(o)}}