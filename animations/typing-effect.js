/**
 * Detect device name using user agent
 * @date 9/14/2023 - 4:29:03 PM
 *
 * @returns {string}
 */
function getDeviceName() {
//   const os = navigator.userAgent.substring(navigator.userAgent.indexOf('(') + 1, navigator.userAgent.indexOf(')')).split(';').map(v => v.trim());
  let device

    if (/Android/i.test(navigator.userAgent)) {
      device = 'Android';
    } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      device = 'iPhone';
    } else if (/Windows/i.test(navigator.userAgent)) {
      device = 'Windows';
      device += /x64/i.test(navigator.userAgent) ? ' (x64)' : '';
    } else if (/Linux/i.test(navigator.userAgent)) {
      device = 'Linux';

      device += /Ubuntu/i.test(navigator.userAgent) ? ' Ubuntu' : '';
      device += /x64|x86_64/i.test(navigator.userAgent) ? ' (x64)' : '';
    }

  return device;
}

/**
 *
 * @param {HTMLElement | null} element
 * @param {string} msg
 * @returns {void}
 */
async function typingEffect(element, msg) {
  return new Promise((resolve) => {
    if (!element || !element.innerHTML) {
      throw new Error(
        `element param is not valid or haven't an innerHTML attribute`
      );
    }

    msg = `$ ${msg}`;

    let i = 0;

    function typeWriter() {
      if (i < msg.length) {
        element.innerHTML += msg.charAt(i);
        i++;
        setTimeout(typeWriter, Math.random() * 70);
      } else {
        setTimeout(resolve, 300);
      }
    }
    element.innerHTML += '<br />';

    typeWriter();
  });
}

/**
 *
 * @param {number} ms
 * @returns {void}
 */
async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
