const inputSwitch = (name, value, func) => {
  switch (name) {
    case 'real_name': {
      func('real_name', value)
      break;
    }

    case 'nickname': {
      func('nickname', value);
      break;
    }

    case 'origin_description': {
      func('origin_description', value);
      break;
    }

    case 'superpowers': {
      func('superpowers', value);
      break;
    }

    case 'catch_phrase': {
      func('catch_phrase', value);
      break;
    }
  
    default: {
      console.log('Something wrong with state');
      break;
    }
  }
}

export default inputSwitch;
