import { MomentPipe } from './moment.pipe';
import * as moment from "moment";
describe('MomentPipe', () => {
  it('create an instance', () => {
    const pipe = new MomentPipe();
    expect(pipe).toBeTruthy();
  });

  it('should give relative time.', () => {
    const pipe = new MomentPipe();
    expect(pipe.transform(new Date().toISOString())).toEqual("a few seconds ago");
  });

  it('should give relative time for -1 day.', () => {
    const pipe = new MomentPipe();
    expect(pipe.transform(moment().subtract(1, "days"))).toEqual("a day ago");
  });

});
