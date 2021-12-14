import mongoose from 'mongoose';
import { Profile } from '../models';
import { Simulator } from '../models';
import { Favorite } from '../models';
import { DBURL } from '../config';

(async () => {
  mongoose.connect(DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const profile = new Profile({
    name: 'Anaeze Nsoffor',
    email: 'nzediegwu1@gmail.com',
    capital: `123000`,
    divisa: `String`,
    prefered_cryptocurrency: 'USDT',
  });
  await profile.save();

  const simulator = new Simulator({
    profile_id: profile._id,
    cryptocurrency: 'BTC',
    dateRecorded: '01/05/2021',
    euros: '400',
    price: '7000',
    quantity: 1000,
  });
  await simulator.save();

  const favorite = new Favorite({
    profile_id: profile._id,
    name: 'HODL coins',
    favorite1: 'BTC',
    favorite2: 'ETH',
    favorite3: 'SOL',
  });
  await favorite.save();

  mongoose.disconnect();
})();
