import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp"


describe('Pruebas en <CounterApp />', () => {

    const initialValue = 10;

    test('debe de hacer match con el snapshot', () => {

        const { container } = render(<CounterApp value={initialValue} />)
        expect(container).toMatchSnapshot();

    })


    test('debe de mostrar el valor inicial 100', () => {

        render(<CounterApp value={100} />)
        expect(screen.getByText(100)).toBeTruthy();
        // expect(screen.getByRole('heading', { level: 2}).innerHTML ).toContain('100');

    });

    test('debe de incrementar el botón +1', () => {

        render(<CounterApp value={initialValue} />)
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('11')).toBeTruthy();
    });

    test('debe de decrementar el botón -1', () => {

        render(<CounterApp value={initialValue} />)
        fireEvent.click(screen.getByText('-1'));
        // screen.debug();
        expect(screen.getByText('9')).toBeTruthy();
    });

    test('debe de funcionar el botón de reset', () => {

        render(<CounterApp value={355} />)
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
        expect(screen.getByText(355)).toBeTruthy

        // screen.debug();
        // fireEvent.click(screen.getByText('Reset'));
        // expect(screen.getByText('9')).toBeTruthy();
    });

});

