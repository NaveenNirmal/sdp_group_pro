import React,{ useRef } from 'react';
import ReciptLogo from '../../images/SDPLogo.png';
import './PrintPage.css';
import './test';
import { useReactToPrint } from 'react-to-print';


function PrintPage() {

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        copyStyles:true,
    })

  return (
        <>
            <div className="printpage__Container">
                <div className="printpage__Top">
                    <div className="printpage__PaymentId">
                        <p>Recipt ID: <span>PNG_PAYID000012</span></p>
                    </div>
                    
                    <button type="submit" className="btn btn-secondary btn-sm btn__Print" id="btn__Print" onClick={handlePrint}>Print Recipt<i class="bi bi-printer-fill"></i></button>
                </div>

                <div className="printing__Body" id="printing__Body" ref={componentRef}>
                    <div className="printpage__Img">
                        <img src={ReciptLogo} alt="reciptlogo" className="rescipt__Logo" id="reciptLogo" width="300"/>
                    </div>

                    <div className="printpage__ReciptDetails">
                        <div className="printpage__PayerDetails">
                            <p className="printpage__DetailTitle">Paid By: <span className="printpage__CxName">Parinda Sathsara</span></p>
                            <p className="printpage__DetailTitle">Type: <span className="printpage__Type">Customer</span></p>
                            <p>Pay & Go (PVT) LTD.</p>
                            <p className="printpage__DetailTitle"><i class="bi bi-telephone-fill"></i><span className="printpage__TpNo"> +(94) 112 345 678</span></p>
                        </div>
                        <div className="printpage__ReciptStatus">
                            <p className="printpage__DetailTitle">Recipt ID: <span className="printpage__ReciptId">PNG_PAYID000012</span></p>
                            <p className="printpage__DetailTitle">Payment Date: <span className="printpage__PaymentDate">11-10-2022</span></p>
                            <p className="printpage__DetailTitle">Status: <span className="printpage__PaymentStatus">Paid</span></p>
                        </div>
                    </div>

                    <div className="printpage__Body">
                        <table className="table">
                            <thead className="table-dark">
                                <tr>
                                    <th>#</th>
                                    <th>Order Item(s)</th>
                                    <th>Description</th>
                                    <th>Weight</th>
                                    <th>Type</th>
                                    <th>Price per 1 Kg (Rs.)</th>
                                    <th>Amount (Rs.)</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Bday Gift Pack</td>
                                    <td>Test Description goes Here</td>
                                    <td>500g</td>
                                    <td>Normal</td>
                                    <td>100.00</td>
                                    <td>350.00</td>
                                </tr>
                                <tr className="printpage__FinalAmount">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="finalTotal">
                                        Final Amount: <span className="amt">Rs. 350.00</span>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr className="printpage__TableFooter">
                                    <td colspan="7">
                                        Thank you for your Payment. Have a Nice Day
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PrintPage;
