import * as React from 'react';
import { DirectionProvider } from '@radix-ui/react-direction';
import { css } from '../../../../stitches.config';
import serialize from 'form-serialize';
import * as Slider from '@radix-ui/react-slider';

export default { title: 'Components/Slider' };

export const Styled = () => (
  <Slider.Root className={rootClass()}>
    <Slider.Track className={trackClass()}>
      <Slider.Range className={rangeClass()} />
    </Slider.Track>
    <Slider.Thumb className={thumbClass()} />
  </Slider.Root>
);

export const RightToLeft = () => (
  <Slider.Root className={rootClass()} dir="rtl">
    <Slider.Track className={trackClass()}>
      <Slider.Range className={rangeClass()} />
    </Slider.Track>
    <Slider.Thumb className={thumbClass()} />
  </Slider.Root>
);

export const Horizontal = () => (
  <>
    <Slider.Root
      className={rootClass()}
      defaultValue={[10, 30]}
      minStepsBetweenThumbs={1}
      onValueChange={(value) => console.log(value)}
    >
      <Slider.Track className={trackClass()}>
        <Slider.Range className={rangeClass()} />
      </Slider.Track>
      <Slider.Thumb className={thumbClass()} />
      <Slider.Thumb className={thumbClass()} />
    </Slider.Root>

    <br />

    <Slider.Root className={rootClass()} defaultValue={[10]}>
      <Slider.Track className={trackClass()}>
        <Slider.Range className={rangeClass()} />
      </Slider.Track>
      <Slider.Thumb className={thumbClass()} />
    </Slider.Root>
  </>
);

export const Vertical = () => (
  <>
    <Slider.Root className={rootClass()} defaultValue={[10, 30]} orientation="vertical">
      <Slider.Track className={trackClass()}>
        <Slider.Range className={rangeClass()} />
      </Slider.Track>
      <Slider.Thumb className={thumbClass()} />
      <Slider.Thumb className={thumbClass()} />
    </Slider.Root>

    <br />

    <Slider.Root className={rootClass()} defaultValue={[10]} orientation="vertical">
      <Slider.Track className={trackClass()}>
        <Slider.Range className={rangeClass()} />
      </Slider.Track>
      <Slider.Thumb className={thumbClass()} />
    </Slider.Root>
  </>
);

export const WithMinimumStepsBetweenThumbs = () => (
  <Slider.Root className={rootClass()} defaultValue={[10, 30]} minStepsBetweenThumbs={3}>
    <Slider.Track className={trackClass()}>
      <Slider.Range className={rangeClass()} />
    </Slider.Track>
    <Slider.Thumb className={thumbClass()} />
    <Slider.Thumb className={thumbClass()} />
  </Slider.Root>
);

export const WithMultipleRanges = () => {
  const [minStepsBetweenThumbs, setMinStepsBetweenThumbs] = React.useState(0);

  return (
    <>
      <label>
        Minimum steps between thumbs:{' '}
        <input
          type="number"
          value={minStepsBetweenThumbs}
          onChange={(event) => setMinStepsBetweenThumbs(Number(event.target.value))}
          style={{ width: 30 }}
        />
      </label>

      <br />
      <br />

      <Slider.Root
        className={rootClass()}
        defaultValue={[10, 15, 20, 80]}
        minStepsBetweenThumbs={minStepsBetweenThumbs}
      >
        <Slider.Track className={trackClass()}>
          <Slider.Range className={rangeClass()} />
        </Slider.Track>
        <Slider.Thumb className={thumbClass()} />
        <Slider.Thumb className={thumbClass()} />
        <Slider.Thumb className={thumbClass()} />
        <Slider.Thumb className={thumbClass()} />
      </Slider.Root>
    </>
  );
};

export const SmallSteps = () => {
  const [value, setValue] = React.useState([0.1]);
  return (
    <>
      <Slider.Root
        className={rootClass()}
        value={value}
        onValueChange={setValue}
        min={0.1}
        max={0.2}
        step={0.003}
      >
        <Slider.Track className={trackClass()}>
          <Slider.Range className={rangeClass()} />
        </Slider.Track>
        <Slider.Thumb className={thumbClass()} />
      </Slider.Root>
      <div>{value}</div>
    </>
  );
};

export const WithinForm = () => {
  const [data, setData] = React.useState({ single: [0], multiple: [10, 15, 20, 80] });
  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      onChange={(event) => {
        const formData = serialize(event.currentTarget, { hash: true });
        setData(formData as any);
      }}
    >
      <fieldset>
        <legend>Single value: {String(data.single)}</legend>
        <Slider.Root name="single" defaultValue={data.single} className={rootClass()}>
          <Slider.Track className={trackClass()}>
            <Slider.Range className={rangeClass()} />
          </Slider.Track>
          <Slider.Thumb className={thumbClass()} />
        </Slider.Root>
      </fieldset>

      <br />
      <br />

      <fieldset>
        <legend>Multiple value: {String(data.multiple)}</legend>
        <Slider.Root name="multiple" defaultValue={data.multiple} className={rootClass()}>
          <Slider.Track className={trackClass()}>
            <Slider.Range className={rangeClass()} />
          </Slider.Track>
          <Slider.Thumb className={thumbClass()} />
          <Slider.Thumb className={thumbClass()} />
          <Slider.Thumb className={thumbClass()} />
          <Slider.Thumb className={thumbClass()} />
        </Slider.Root>
      </fieldset>
    </form>
  );
};

export const Strict = () => (
  <React.StrictMode>
    <Slider.Root className={rootClass()}>
      <Slider.Track className={trackClass()}>
        <Slider.Range className={rangeClass()} />
      </Slider.Track>
      <Slider.Thumb className={thumbClass()} />
    </Slider.Root>
    <Slider.Root className={rootClass()} defaultValue={[10, 15, 20, 80]}>
      <Slider.Track className={trackClass()}>
        <Slider.Range className={rangeClass()} />
      </Slider.Track>
      <Slider.Thumb className={thumbClass()} />
      <Slider.Thumb className={thumbClass()} />
      <Slider.Thumb className={thumbClass()} />
      <Slider.Thumb className={thumbClass()} />
    </Slider.Root>
  </React.StrictMode>
);

export const Chromatic = () => (
  <>
    <h1>Uncontrolled</h1>
    <h2>LTR</h2>
    <Slider.Root className={rootClass()} defaultValue={[20]}>
      <Slider.Track className={trackClass()}>
        <Slider.Range className={rangeClass()} />
      </Slider.Track>
      <Slider.Thumb className={thumbClass()} />
    </Slider.Root>
    <Slider.Root className={rootClass()} defaultValue={[10, 30]}>
      <Slider.Track className={trackClass()}>
        <Slider.Range className={rangeClass()} />
      </Slider.Track>
      <Slider.Thumb className={thumbClass()} />
      <Slider.Thumb className={thumbClass()} />
    </Slider.Root>

    <h2>RTL</h2>
    <Slider.Root className={rootClass()} defaultValue={[20]} dir="rtl">
      <Slider.Track className={trackClass()}>
        <Slider.Range className={rangeClass()} />
      </Slider.Track>
      <Slider.Thumb className={thumbClass()} />
    </Slider.Root>
    <Slider.Root className={rootClass()} defaultValue={[10, 30]} dir="rtl">
      <Slider.Track className={trackClass()}>
        <Slider.Range className={rangeClass()} />
      </Slider.Track>
      <Slider.Thumb className={thumbClass()} />
      <Slider.Thumb className={thumbClass()} />
    </Slider.Root>

    <h2>Multiple ranges</h2>
    <Slider.Root className={rootClass()} defaultValue={[10, 15, 20, 80]}>
      <Slider.Track className={trackClass()}>
        <Slider.Range className={rangeClass()} />
      </Slider.Track>
      <Slider.Thumb className={thumbClass()} />
      <Slider.Thumb className={thumbClass()} />
      <Slider.Thumb className={thumbClass()} />
      <Slider.Thumb className={thumbClass()} />
    </Slider.Root>

    <h1>Controlled</h1>
    <h2>LTR</h2>
    <Slider.Root className={rootClass()} value={[20]}>
      <Slider.Track className={trackClass()}>
        <Slider.Range className={rangeClass()} />
      </Slider.Track>
      <Slider.Thumb className={thumbClass()} />
    </Slider.Root>
    <Slider.Root className={rootClass()} value={[10, 30]}>
      <Slider.Track className={trackClass()}>
        <Slider.Range className={rangeClass()} />
      </Slider.Track>
      <Slider.Thumb className={thumbClass()} />
      <Slider.Thumb className={thumbClass()} />
    </Slider.Root>

    <h1>Direction</h1>
    <h2>Prop</h2>
    <Slider.Root className={rootClass()} value={[20]} dir="rtl">
      <Slider.Track className={trackClass()}>
        <Slider.Range className={rangeClass()} />
      </Slider.Track>
      <Slider.Thumb className={thumbClass()} />
    </Slider.Root>
    <Slider.Root className={rootClass()} value={[10, 30]} dir="rtl">
      <Slider.Track className={trackClass()}>
        <Slider.Range className={rangeClass()} />
      </Slider.Track>
      <Slider.Thumb className={thumbClass()} />
      <Slider.Thumb className={thumbClass()} />
    </Slider.Root>

    <h2>Inherited</h2>
    <DirectionProvider dir="rtl">
      <Slider.Root className={rootClass()} value={[20]}>
        <Slider.Track className={trackClass()}>
          <Slider.Range className={rangeClass()} />
        </Slider.Track>
        <Slider.Thumb className={thumbClass()} />
      </Slider.Root>
      <Slider.Root className={rootClass()} value={[10, 30]}>
        <Slider.Track className={trackClass()}>
          <Slider.Range className={rangeClass()} />
        </Slider.Track>
        <Slider.Thumb className={thumbClass()} />
        <Slider.Thumb className={thumbClass()} />
      </Slider.Root>
    </DirectionProvider>

    <h1>Scenarios</h1>
    <h2>Extremes</h2>
    <Slider.Root className={rootClass()} defaultValue={[0, 100]}>
      <Slider.Track className={trackClass()}>
        <Slider.Range className={rangeClass()} />
      </Slider.Track>
      <Slider.Thumb className={thumbClass()} />
      <Slider.Thumb className={thumbClass()} />
    </Slider.Root>

    <h2>0 case</h2>
    <Slider.Root className={rootClass()} defaultValue={[0]} min={-100} max={100}>
      <Slider.Track className={trackClass()}>
        <Slider.Range className={rangeClass()} />
      </Slider.Track>
      <Slider.Thumb className={thumbClass()} />
    </Slider.Root>

    <h2>Multiple ranges</h2>
    <Slider.Root className={rootClass()} value={[10, 15, 20, 80]}>
      <Slider.Track className={trackClass()}>
        <Slider.Range className={rangeClass()} />
      </Slider.Track>
      <Slider.Thumb className={thumbClass()} />
      <Slider.Thumb className={thumbClass()} />
      <Slider.Thumb className={thumbClass()} />
      <Slider.Thumb className={thumbClass()} />
    </Slider.Root>

    <h2>Vertical</h2>
    <div style={{ display: 'flex' }}>
      <Slider.Root className={rootClass()} defaultValue={[10, 30]} orientation="vertical">
        <Slider.Track className={trackClass()}>
          <Slider.Range className={rangeClass()} />
        </Slider.Track>
        <Slider.Thumb className={thumbClass()} />
        <Slider.Thumb className={thumbClass()} />
      </Slider.Root>
      <Slider.Root className={rootClass()} defaultValue={[20]} orientation="vertical">
        <Slider.Track className={trackClass()}>
          <Slider.Range className={rangeClass()} />
        </Slider.Track>
        <Slider.Thumb className={thumbClass()} />
      </Slider.Root>
    </div>

    <h1>Disabled</h1>
    <Slider.Root className={rootClass()} defaultValue={[20]} disabled>
      <Slider.Track className={trackClass()}>
        <Slider.Range className={rangeClass()} />
      </Slider.Track>
      <Slider.Thumb className={thumbClass()} />
    </Slider.Root>

    <h1>State attributes</h1>
    <h2>Default</h2>
    <Slider.Root className={rootAttrClass()} defaultValue={[20]}>
      <Slider.Track className={trackAttrClass()}>
        <Slider.Range className={rangeAttrClass()} />
      </Slider.Track>
      <Slider.Thumb className={thumbAttrClass()} />
    </Slider.Root>

    <h2>Disabled</h2>
    <Slider.Root className={rootAttrClass()} defaultValue={[20]} disabled>
      <Slider.Track className={trackAttrClass()}>
        <Slider.Range className={rangeAttrClass()} />
      </Slider.Track>
      <Slider.Thumb className={thumbAttrClass()} />
    </Slider.Root>
  </>
);
Chromatic.parameters = { chromatic: { disable: false } };

const RECOMMENDED_CSS__SLIDER__ROOT: any = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  // ensures no selection
  userSelect: 'none',
  // disable browser handling of all panning and zooming gestures on touch devices
  touchAction: 'none',
};

const rootClass = css({
  ...RECOMMENDED_CSS__SLIDER__ROOT,
  '&[data-orientation="horizontal"]': {
    height: 15,
  },
  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    width: 15,
  },
  '&[data-disabled]': { opacity: 0.5 },
});

const RECOMMENDED_CSS__SLIDER__TRACK: any = {
  position: 'relative',
  // ensures full width in horizontal orientation, ignored in vertical orientation
  flexGrow: 1,
};

const trackClass = css({
  ...RECOMMENDED_CSS__SLIDER__TRACK,
  background: 'gainsboro',
  borderRadius: 4,
  '&[data-orientation="horizontal"]': {
    height: 4,
  },
  '&[data-orientation="vertical"]': {
    width: 4,
    height: 300,
  },
});

const RECOMMENDED_CSS__SLIDER__RANGE: any = {
  position: 'absolute',
  // good default for both orientation (match track width/height respectively)
  '&[data-orientation="horizontal"]': {
    height: '100%',
  },
  '&[data-orientation="vertical"]': {
    width: '100%',
  },
};

const rangeClass = css({
  ...RECOMMENDED_CSS__SLIDER__RANGE,
  background: '$black',
  borderRadius: 'inherit',
});

const RECOMMENDED_CSS__SLIDER__THUMB = {
  // ensures the thumb is sizeable
  display: 'block',

  // Add recommended target size regardless of styled size
  '&::before': {
    content: '""',
    position: 'absolute',
    zIndex: -1,
    width: 44,
    height: 44,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

const thumbClass = css({
  ...RECOMMENDED_CSS__SLIDER__THUMB,
  borderRadius: 15,
  width: 15,
  height: 15,
  backgroundColor: '$black',
  '&:focus': {
    outline: 'none',
    boxShadow: '0 0 0 2px $colors$red',
  },
});

const styles = {
  backgroundColor: 'rgba(0, 0, 255, 0.3)',
  border: '2px solid blue',
  padding: 10,

  '&[data-disabled]': { borderStyle: 'dashed' },
};
const rootAttrClass = css({ ...RECOMMENDED_CSS__SLIDER__ROOT, ...styles });
const trackAttrClass = css({ ...RECOMMENDED_CSS__SLIDER__TRACK, ...styles });
const rangeAttrClass = css({ ...RECOMMENDED_CSS__SLIDER__RANGE, ...styles });
const thumbAttrClass = css({ ...RECOMMENDED_CSS__SLIDER__THUMB, ...styles });
