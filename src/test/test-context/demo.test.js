import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProviderTest from '../../component/test-context/case.js';

test('测试React Context Api', () => {
    render(<ProviderTest/>);
    expect(screen.getByText('Hello World!')).toBeTruthy();
})