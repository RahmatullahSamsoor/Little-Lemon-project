import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ReservationForm from './BookingForm';

describe('ReservationForm', () => {
    it ('renders the form with all required elements', ()=> {
        render(<ReservationForm/>);

        expect(screen.getByLabelText('First Name')).toBeInTheDocument();
        expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
        expect(screen.getByLabelText('email')).toBeInTheDocument();
        expect(screen.getByLabelText('Number of guests')).toBeInTheDocument();
        expect(screen.getByLabelText('Occasion')).toBeInTheDocument();
        expect(screen.getByLabelText('Seating Preferences')).toBeInTheDocument();

    });

    it ('disables the "Book Table" button when the form is incomplet', () =>{
        render(<ReservationForm/>);
        const bookTableButton = screen.getByText('Book Table');
        expect(bookTableButton).toBeDisabledw();
    });

    it('enables the "Book Table" button when the form is complet', ()=> {
        render(<ReservationForm/>);
        const bookTableButton =screen.getByText('Book Table');
        expect(bookTableButton).toBeEnabled();
    
    fireEvent.change(screen.getByLabelText('First Name'), {
        target: {value: 'John'},
    });
    fireEvent.change(screen.getByLabelText('Last Name'),{
        target:{value: 'Doe'},
    });
    fireEvent.change(screen.getByLabelText('email'),{
        target:{value: 'example@example.com'},
    });
    fireEvent.change(screen.getByLabelText('Number of guests'),{
        target:{value: '4'},
    });

    fireEvent.change(screen.getByLabelText('Occasion'),{
        target: {value: 'Birthday'},
    });

    fireEvent.change(screen.getByLabelText('Seating Preferences'),{
        target:{value: 'Indoor'},
    });

    expect(bookTableButton).not.toBeDisabled();
});
    
});