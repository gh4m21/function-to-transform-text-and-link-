import React from 'react';

const Hello = () => {
  const transformHashtagAndLink = (strText) => {
    let result = [];
    result = strText.split(' ').map((str) => {
      console.log(str, str.startsWith('#'));
      if (str.startsWith('http')) {
        result.push(
          <a href={`/${str}`} className="text-blue-500">
            {str}
          </a>
        );
      } else {
        result.push(str + ' ');
      }

      console.log(result);
      return str + ' ';
    });
  };

  return (
    <div>
      <h1>Hello React.</h1>
      {'m pa konnen\r\nsa w ap di a\r\n#mood\r\nhttps://www.google.com/'
        .split('\n')
        .map((text) => {
          return (
            <div key={text}>
              <p key={text}>{transformHashtagAndLink(text)}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Hello;
