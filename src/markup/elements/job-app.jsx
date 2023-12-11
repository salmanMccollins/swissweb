

import React, { useEffect } from 'react';

const JobApplicationForm = () => {
  useEffect(() => {
    try {
      const f = document.createElement("iframe");
      f.src = 'https://forms.zohopublic.in/salman2/form/swiss/formperma/B5gwauxmZBHmZZAjZL2mrSFXmmHI-kDT4ACcTmab4KY?zf_rszfm=1';
      f.style.border = "none";
      f.style.height = "739px";
      f.style.width = "90%";
      f.style.transition = "all 0.5s ease";
      f.setAttribute("aria-label", 'swiss');

      const d = document.getElementById("zf_div_B5gwauxmZBHmZZAjZL2mrSFXmmHI-kDT4ACcTmab4KY");
      d.appendChild(f);

      const handleMessage = (event) => {
        const evntData = event.data;
        if (evntData && evntData.constructor === String) {
          const zf_ifrm_data = evntData.split("|");
          if (zf_ifrm_data.length === 2) {
            const zf_perma = zf_ifrm_data[0];
            const zf_ifrm_ht_nw = (parseInt(zf_ifrm_data[1], 10) + 15) + "px";
            const iframe = document.getElementById("zf_div_B5gwauxmZBHmZZAjZL2mrSFXmmHI-kDT4ACcTmab4KY").getElementsByTagName("iframe")[0];
            if ((iframe.src).indexOf('formperma') > 0 && (iframe.src).indexOf(zf_perma) > 0) {
              const prevIframeHeight = iframe.style.height;
              if (prevIframeHeight !== zf_ifrm_ht_nw) {
                iframe.style.height = zf_ifrm_ht_nw;
              }
            }
          }
        }
      };

      window.addEventListener('message', handleMessage, false);

      return () => {
        window.removeEventListener('message', handleMessage, false);
      };
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div id="zf_div_B5gwauxmZBHmZZAjZL2mrSFXmmHI-kDT4ACcTmab4KY"></div>
  );
};

export default JobApplicationForm;
