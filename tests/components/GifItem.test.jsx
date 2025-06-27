const { render, screen } = require("@testing-library/react")
const { GifItem } = require("../../src/components")

describe('Testsuit for GifItem Component', () => { 
    const title = 'One Punch Man';
    const url = 'http://thisisafakeurl.com/';
    test('should match the snapshot', () => {
        const { container } =  render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot();
    })

    test('should show errors when proptypes are missing', () => {
        render(<GifItem />);
        expect(screen.getByRole('paragraph').innerHTML).not.toBeTruthy();
        expect(screen.getByRole('img').querySelector('source')).not.toBeTruthy();
    })
    
    test('should show the image with the url and alt attribs defined', () => {
        render(<GifItem title={title} url={url}/>);
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('should show the title passed via props inside a p tag', () => {
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByRole('paragraph').innerHTML).toBe(title);
    })
    
})