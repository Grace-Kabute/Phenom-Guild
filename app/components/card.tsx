import { Card, CardContent, Typography, Link } from '@mui/material';

const HeroCard = ({ title, description, linkText, href }: {
  title: string;
  description: string;
  linkText: string;
  href: string;
}) => {
  return (
    <Card
      sx={{
        maxWidth: 420,
        borderRadius: 4,
        boxShadow: 3,
        p: 2,
        backgroundColor: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(4px)',
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {description}
        </Typography>
        <Link href={href} underline="hover" sx={{ fontWeight: 500 }}>
          {linkText}
        </Link>
      </CardContent>
    </Card>
  );
};

export default HeroCard;
