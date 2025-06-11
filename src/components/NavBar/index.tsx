'use client';
import { useRouter } from 'next/navigation';
import { BackButton, Icon, Nav } from './styles';

export default function NavBar() {
    const router = useRouter();

    const handleBack = () => {
        if (typeof window !== 'undefined' && window.history.length > 1) {
            router.back();
        } else {
            router.push('/');
        }
    };

    return (
        <Nav aria-label="Navegación de retorno">
            <BackButton onClick={handleBack} aria-label="Volver atrás">
                <Icon
                    src="/chevron-left.svg"
                    alt="Back icon"
                    aria-hidden="true"
                    width={12}
                    height={12}
                />
                <span>Back</span>
            </BackButton>
        </Nav>
    );
}
