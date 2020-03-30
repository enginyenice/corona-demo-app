import React from 'react'

export default function Header() {
    return (
        <div className="text-center text-monospace">
            <h2>Covid19 Güncel Veriler</h2>
            <p className="text-muted">
               Veriler <a href="https://corona.cbddo.gov.tr/" className="text-reset">corona.cbddo.gov.tr</a> adresinden çekilmektedir.
            </p>
        </div>
    )
}
